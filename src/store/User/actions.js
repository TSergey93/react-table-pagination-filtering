import {GET_USERS, DELETE_USER, SORT_USER} from "./types";

// Функция получения данных пользователя
export const getUserDatas = data => ({
    type: GET_USERS,
    data: {
        users: data.users
    }
});

// Функция Удаления пользователя
export const deleteUser = data => ({
    type: DELETE_USER,
    data
});

// Функция сортировки по имени
export const sortUser = () => ({
    type: SORT_USER
});