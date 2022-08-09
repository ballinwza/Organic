import {startFetch, endFetch, errorFetch} from './statusAction'
import { signin } from '../../data/user'
export const SET_AUTH = "SET_AUTH"

export const setAuth = (user)=>{
    return{
        type: SET_AUTH,
        payload: user
    }
}

export const fetchAuthAsync =(email, password)=>{
    return async function(dispatch, getState) {

        try{
            dispatch(startFetch())
            const username = await signin(email, password)
            if(username){
                dispatch(setAuth(username))
                dispatch(errorFetch(""))
                dispatch(endFetch())
            }

        } catch (error){
            dispatch(setAuth(null))
            dispatch(errorFetch(error))
            dispatch(endFetch())
        }
    }

}