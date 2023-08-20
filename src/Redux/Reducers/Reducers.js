import { ADD_USER, EDIT_USER, DELETE_USER } from "../Actions/ActionTypes";

const intialState = {
    users: []
}

export const reducers = (state = intialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id ? { ...action.payload } : user
                ),
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user,i) => i !== action.payload)
            };
        default:
            return state;
    }
}