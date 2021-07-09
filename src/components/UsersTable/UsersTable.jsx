import React, {useEffect, useState} from "react";

import {useDispatch} from "react-redux";

import Pagination from "../Pagination/Pagination";
import UserSearch from "../UserSearch/UserSearch";
import {sortUser, deleteUser} from "../../store/User/actions";
import {useStyles} from "./UsersTable.styles";

const UsersTable = ({usersBasic, setUserInfo}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [users, setUsers] = useState(usersBasic);
    const [filterText, setFilterText] = useState("");
    const [filterEmail, setFilterEmail] = useState("");
    const [filterGender, setFilterGender] = useState("all");

    useEffect(() => {
        setUsers([...usersBasic]);
    }, [usersBasic]);

    useEffect(() => {
        filtering();
    }, [filterText, filterEmail, filterGender, usersBasic]);

    // Функция сортировки по имени
    const sortName = () => {
        dispatch(sortUser());
    };

    // Функция фильтрации по всем полям
    const filtering = () => {
        let tmp = [...usersBasic];

        if (!filterText && !filterEmail && filterGender === "all") return setUsers(tmp);

        if (filterText) {
            tmp = tmp.filter(e => e.name.first.toLowerCase().includes(filterText.toLowerCase())
                || e.name.title.toLowerCase().includes(filterText.toLowerCase())
                || e.name.last.toLowerCase().includes(filterText.toLowerCase()));
        }

        if (filterEmail) {
            tmp = tmp.filter(e => e.email.toLowerCase().includes(filterEmail.toLowerCase()));
        }

        tmp = (filterGender === "all") ? tmp : tmp.filter(e => e.gender.toLowerCase() === filterGender.toLowerCase());

        setUsers(tmp);
    };

    return (
        <div className={classes.wrapper}>
            <UserSearch/>
            <table className={classes.table}>
                <thead>
                <tr>
                    <th className={classes.cellName}>Имя
                        <div className={classes.btn} onClick={sortName}>Сорт</div>
                        <input type="text" className={classes.filterText} placeholder="Введите ФИО" onChange={e => setFilterText(e.target.value.trim())}/>
                    </th>
                    <th>Пол
                        <select className={classes.selectGender} onChange={e => setFilterGender(e.target.value)}>
                            <option value="all">- Выберите пол -</option>
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                        </select>
                    </th>
                    <th>Email
                        <input type="text" className={classes.filterText} placeholder="Введите email" onChange={e => setFilterEmail(e.target.value.trim())}/>
                    </th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {(!users.length) ? <td colSpan="4" className={classes.usersNotFound}>Пользователи не найдены</td>
                    : users.map(e => <TableRow data={e} setUserInfo={setUserInfo} key={Math.random()}/>)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4"><Pagination elements={usersBasic} update={setUsers} countOnPage={10} users={users}/></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

// Компонент строки таблицы
const TableRow = ({data, setUserInfo}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    // Функция удаления пользователя
    const removeUser = (e, cell) => {
        e.stopPropagation();

        dispatch(deleteUser({cell}));
    };

    return (
        <tr className={classes.row} onClick={() => setUserInfo(data)}>
            <td>{`${data.name.title} ${data.name.first} ${data.name.last}`}</td>
            <td>{(data.gender === "male") ? "Мужской" : "Женский"}</td>
            <td>{data.email}</td>
            <td><span className={classes.delUser} onClick={e => removeUser(e, data.cell)}>Удалить</span></td>
        </tr>
    );
};

export default UsersTable;