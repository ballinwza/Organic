import { useSelector, useDispatch } from "react-redux"
import { removeCart, addCart, decrementCart } from "../redux/actions/cartAction"
import { currency } from "./uiComponents/currency"
import { Quantity } from "./uiComponents/Quantity" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrash} from "@fortawesome/free-solid-svg-icons"

export const CartLeft = ()=>{
    const cart = useSelector(state=> state.cart)
    const dispatch = useDispatch()
    const checkCart = cart.map(item=>item.quantity)
    const sumCart = checkCart.reduce((total, value)=>{return total + value})
    const totalPrice = cart.map(item=> item.quantity*item.price)
    const sumPrice = totalPrice.reduce((total, value)=>{return total + value})

    const GetCartItem = ({item}) =>{
        return(
            <div className="cart-collapse row">
                <div className="col-12 col-sm-3 m-auto">
                    <div className="cart-image">
                        <img src={item.image} alt={item.title}/>
                    </div>
                </div>
                <div className="col-12 col-sm">
                    <div className="cart-list cart-list-title">
                        <p>{item.title.toUpperCase()}</p>
                    </div>
                </div>
                <div className="col-12 col-sm">
                    <div className="cart-list">
                        <Quantity quantity={item.quantity} increment={()=>dispatch(addCart({...item}))} decrement={()=>dispatch(decrementCart({...item}))}/>
                    </div>
                </div>
                <div className="col-12 col-sm">
                    <div className="cart-list">
                        <p>{currency(item.price)}  THB</p>
                    </div>
                </div>
                <div className="col-12 col-sm-1">
                    <div className="cart-list cart-list-last" onClick={()=> dispatch(removeCart({...item, quantity: 0}))}>
                        <FontAwesomeIcon icon={faTrash} className="cart-icon"/>
                        <div className="mobile-cart-icon"><button className="btn btn-danger">Delete</button></div>
                    </div>
                </div>
            </div>
        )
    }


    const CartItem = ()=>{
        if(sumCart===0){
            return(
                <div className="row">
                    <div className="col-12 cart-collapse justify-content-center">
                        <p className="red-color">Do not have cart item</p>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="row">
                    {cart.map( (val)=>{
                        if(val.quantity !== 0) {
                            return(
                                <div className="col-12" key={val.id}>
                                    <GetCartItem item={val}/>
                                </div>
                            )
                        }else{
                            return false
                        }
                    })}
                </div>
            )
        }
    }

    return( 
        <div className="row">
            <div className="col-12">
                <h3 className="mainDark-color">CART</h3>
            </div>
            <div className="col-12">
                <div className="dashLine-cart"></div>
            </div>
            <div className="col-12">
                <CartItem/>
            </div>
            <div className="col-12">
                <div className="dashLine-cart"></div>
            </div>
            <div className="col-12 text-end">
                <h3 className="mainDark-color">
                    Total {currency(sumPrice)} THB
                </h3>
            </div>
        </div>
    )
}