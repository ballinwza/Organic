import {ADD_TO_CART, REMOVE_FROM_CART, DRECREMENT_CART, ADD_CART_LIST} from '../actions/cartAction'
import {mockUp} from '../../data/mockUp'

const initialState = mockUp


export const cartReducer = (state= initialState, action)=>{

    const getItem = (getItemname, value) =>{
        let update
        getItemname = state.find(item => item.id === action.payload.id)
        if(!getItemname){
            update = [...state, action.payload]
        }else{
            update = state.map(item=> ({
                ...item,
                quantity: item.id === getItemname.id ? item.quantity += value : item.quantity
            }))
        }
        return update
    } 

    switch(action.type){
        case ADD_TO_CART:
            let addItem = null
            return getItem(addItem, 1)

        case DRECREMENT_CART:
            let decreItem = null
            return getItem(decreItem, -1)

        case REMOVE_FROM_CART:
            const foundRemove = state.find(item => item.id === action.payload.id)
            return (
                state.map(item=> ({
                    ...item,
                    quantity: item.id === foundRemove.id ? item.quantity = 0 : item.quantity
                }))
            ) 
        case ADD_CART_LIST:
            return [...state, action.payload] 
        default:
            return state
    }
}