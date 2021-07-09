import React, {useEffect, useState} from "react";

import {useStyles} from "./Pagination.styles";

const Pagination = ({elements, update, countOnPage, users}) => {
    const classes = useStyles();

    const [pages, setPages] = useState([1]);
    const [activePage, setActivePage] = useState(1);

    // Вычисление количества страниц
    useEffect(() => {
        const countOfItems = Math.ceil(elements.length / countOnPage);
        const tmpPages = [];

        for (let i = 1; i <= countOfItems; i++) {
            tmpPages.push(i);
        }

        setPages(tmpPages);
    }, [elements]);

    // Подсветка текущей страницы
    useEffect(() => {
        const paginationActiveElem = document.querySelector(`.${classes.paginationItemsWrapper} > li:nth-of-type(${activePage})`);

        if (paginationActiveElem) paginationActiveElem.classList.add("active");
    });

    // Функция выборки элементов в зависимости от позиции пагинации
    const showElements = page => {
        const start = (page - 1) * countOnPage;
        const end = start + countOnPage;

        update(elements.slice(start, end));
    };

    // Обработчик клика по пагинации
    const handlerClick = number => {
        showElements(number);
        setActivePage(number);
    };

    if (users.length > countOnPage) {
        showElements(1);
        if (activePage !== 1) setActivePage(1);
    }

    return (
        <div className={classes.paginationWrapper}>
            <ul className={classes.paginationItemsWrapper}>
                {pages.map(e => <li onClick={() => handlerClick(e)} key={Math.random()}>{e}</li>)}
            </ul>
        </div>
    );
};

export default Pagination;