import { useSelector, useDispatch } from "react-redux"
import { removeCart, addCart, decrementCart } from "../redux/actions/cartAction"

export const CartItem = ()=>{
    const cart = useSelector(state=> state.cart)
    const dispatch = useDispatch()
    const totalPrice = cart.map(item=> item.quantity*item.price) 

    return(
        <div className="cart-container">
            <div className="cart-head">
                <div className="cart-head-list">
                    <h2>Title</h2>
                </div>
                <div className="cart-head-list">
                    <h2>Price</h2>
                </div>
                <div className="cart-head-list">
                    <h2>Quantity</h2>
                </div>
                <div className="cart-head-list">
                    <h2>Amount</h2>
                </div>
                <div className="cart-head-list">  
                    <h2>Delete</h2>
                </div>
            </div>

            
            {cart.map( (item)=>{
                if(item.quantity !== 0)
                {
                    return(
                    <div className="cart-body" key={item.id}>
                        <div className="cart-body-list"><p>{item.title.toUpperCase()}</p> </div>
                        <div className="cart-body-list"><p>{item.price}</p> </div>
                        <div className="cart-body-list"> 
                            <span onClick={()=>dispatch(decrementCart({...item}))}>-</span> 
                            <span>{item.quantity}</span> 
                            <span onClick={()=>dispatch(addCart({...item}))}>+</span> 
                        </div>
                        <div className="cart-body-list"><p>{item.price*item.quantity}</p> </div>
                        <div className="cart-body-list"><p onClick={()=> dispatch(removeCart({...item, quantity: 0}))}>X</p> </div>
                    </div>
                    )
                }else{
                    return false
                }
            })}

            Total Price : {totalPrice.reduce((total, value)=>{return total + value})} Bath
        </div>
    )
}