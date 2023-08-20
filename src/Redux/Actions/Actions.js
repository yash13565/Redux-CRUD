import { DELETE_USER, EDIT_USER, ADD_USER } from "./ActionTypes"


export const signup = (userData)=>{
    console.log(userData,'users')
    return (dispatch)=>{
        dispatch({
            type:ADD_USER,
            payload:userData
        })
    }
}
export const editUser = (userData)=>{
    return((dispatch)=>{
        dispatch({
            type:EDIT_USER,
            payload:userData
        })
    })
}
export const deleteUser = (userID)=>{
    return(dispatch)=>{
        dispatch({
            type:DELETE_USER,
            payload:userID
        })
    }
}