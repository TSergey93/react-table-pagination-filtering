import {GET_USERS, DELETE_USER, SORT_USER} from "./types";

let initialState = {
    users: []
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.data.users
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                users: [...state.users].filter(e => e.cell !== action.data.cell)
            }
        }
        case SORT_USER: {
            return {
                ...state,
                users: [...state.users].sort((a, b) => a.name.first.localeCompare(b.name.first))
            }
        }
        default:
            return state;
    }
};
