import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";
import { statusReducer } from "./statusReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    status: statusReducer
})

/* Property in rootState
{
    cart: [
    {
        id: int,
        title: "",
        price: int,
        quantity: int
    }
    ],
    auth: {user:null},
    status: {loading:false, error: "string"}
}
 */ 