import { DISCOUNT, ALERT} from "../reducers/discountReducer" 
import { ADD_PROMO } from "../../data/discount"

export const discountCode = (code, value) =>{
    return{
        type: DISCOUNT,
        payload: code,
        value : value
    }
}

export const alertDiscount = (bool) =>{
    return{
        type: ALERT,
        payload: bool
    }
} 

export const addPromotion = (obj) =>{
    return{
        type: ADD_PROMO,
        payload: obj
    }
}