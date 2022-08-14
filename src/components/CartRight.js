import { currency } from "./uiComponents/currency"
import { useSelector } from "react-redux"

export const CartRight = () =>{
    const cart = useSelector(state=> state.cart) 
    const totalPrice = cart.map(item=> item.quantity*item.price)
    const sumPrice = totalPrice.reduce((total, value)=>{return total + value})

    return(
        <div className="row">
            <div className="col-12">
                <h3 className="mainDark-color">Promo Code</h3>
            </div>
            <div className="col-12">
                <div className="dashLine-cart"></div>
            </div>
            <div className="col-12">
                <div className="cart-collapse"> 
                    <input type="text" placeholder="ABC-123-456"/>
                    <button className="myBtn btn-mainDark btn-cart">APPLY</button>
                </div>
            </div>
            <div className="col-12">
                <h3 className="mainDark-color">Order Summary</h3>
                <div className="mt-5 black50-color">
                    <p className="d-flex justify-content-between">Discount <span>100 THB</span></p>
                    <p className="d-flex justify-content-between">Shiping Fee <span>20 THB</span></p>
                </div>
            </div>
            <div className="col-12">
                <div className="dashLine-cart"></div>
            </div>
            <div className="col-12 d-flex justify-content-between">
                <h3 className="mainDark-color">
                    Grand Total
                </h3>   
                <h3 className="mainDark-color">
                    {currency(sumPrice)} THB
                </h3> 
            </div>

            
        </div>
    )
}