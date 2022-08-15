import { DISCOUNT, ALERT } from "../reducers/discountReducer" 

export const discountCode = (code) =>{
    return{
        type: DISCOUNT,
        payload: code
    }
}

export const alertDiscount = (bool) =>{
    return{
        type: ALERT,
        payload: bool
    }
} 