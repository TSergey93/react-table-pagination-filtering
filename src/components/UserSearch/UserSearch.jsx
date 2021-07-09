import React, {useEffect, useState} from "react";

import {useDispatch} from "react-redux";

import {getUserDatas} from "../../store/User/actions";
import getUsers from "../../utils/api/api.users";
import {useStyles} from "./UserSearch.styles";

const UserSearch = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [userCount, setUserCount] = useState(window.sessionStorage.getItem("count") || 1); // введённое количество пользователей

    // Функция обновления данных о пользователях
    useEffect(() => {
        if (!userCount) return;

        new Promise(resolve =>
            resolve(getUsers(userCount))).then(data => {
            if (data.data.results) dispatch(getUserDatas({users: data.data.results}));;
        });
    }, [userCount]);

    // Функция обновляет стейт с количеством пользователей и запоминает значение
    const updateUsers = () => {
        const number = +document.querySelector(`.${classes.search}`).value;

        setUserCount(number);
        window.sessionStorage.setItem("count", number);
    };

    //Обработка нажатия Enter на поле поиска
    const handlerEnter = e => {
        if (e.keyCode === 13) {
            updateUsers();
            e.target.blur();
        }
    };

    // Функция проверки введённого значения
    const validateText = element => {
        const text = +element.value;

        if (text === 0) {
            element.value = 1;
        }

        if (text > 99) {
            element.value = 99;
        }
    };

    return (
        <div className={classes.wrapper}>
            <label from="search" className={classes.label}>Введите количество:</label>
            <input type="number" id="search" className={classes.search} defaultValue={userCount}
                   onKeyDown={e => handlerEnter(e)} onChange={e => validateText(e.target)}/>
            <span className={classes.arrow}> => </span>
            <div className={classes.btn} onClick={updateUsers}>Найти</div>
        </div>
    );
};

export default UserSearch;