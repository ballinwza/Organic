export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART" 
export const DRECREMENT_CART = "DRECREMENT_CART"  
export const ADD_CART_LIST = "ADD_CART_LIST"

export const addCart = (productItem)=>{
    return{
        type: ADD_TO_CART,
        payload: productItem
    }
}

export const removeCart = (id) =>{
    return{
        type: REMOVE_FROM_CART,
        payload: id
    }
} 

export const decrementCart = (id) =>{
    return{
        type: DRECREMENT_CART,
        payload: id
    }
} 

export const addCartList = (data)=>{
    return{
        type: ADD_CART_LIST,
        payload: data
    }
}

