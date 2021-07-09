import axios from "axios";

// Запрос на получение пользователей
const getUsers = count => axios.get(`https://api.randomuser.me/?results=${count}`);

export default getUsers;