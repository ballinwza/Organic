import { currency } from "./uiComponents/currency"
import { useSelector, useDispatch } from "react-redux"
import { discountCode, alertDiscount  } from "../redux/actions/discountAction"
import { useState } from "react";
import { ConfirmModal } from "./uiComponents/ConfirmModal"; 

export const CartRight = () =>{
    const cart = useSelector(state=> state.cart) 
    const code = useSelector(state=>state.code)
    const discount = useSelector(state=>state.discount)
    const dispatch = useDispatch()
    const totalPrice = cart.map(item=> item.quantity*item.price)
    const sumPrice = totalPrice.reduce((total, value)=>{return total + value}) 
    const shippingFee = 20
    const discountPrice = sumPrice - code.discount - shippingFee
    const [ codeValue, setCodeValue ] = useState("")

    const handleClose = () => {
        dispatch(alertDiscount(false));
        setCodeValue("")
    }

    const calDiscountPrice = () => {
        if (currency(discountPrice) <= 0){
            return 0
        } else {
            return currency(discountPrice)
        }
    }

    return(
        <div className="row" > 
            <ConfirmModal handleClose={handleClose} showValid={code.valid} showInvalid={code.invalid} validText="Promotion code was apply" invalidText="Invalid Promotion code"/>

            <div className="col-12">
                <h3 className="mainDark-color">Promo Code</h3>
            </div>
            <div className="col-12">
                <div className="dashLine-cart"></div>
            </div>
            <div className="col-12">
                <div className="cart-collapse"> 
                    <input type="text" placeholder="ABC123456" value={codeValue} onChange={(e)=>setCodeValue(e.target.value)}/>
                    <button className="myBtn btn-mainDark btn-cart" onClick={()=>{dispatch(discountCode(discount, codeValue))}}>APPLY</button>
                </div>
            </div>
            <div className="col-12">
                <h3 className="mainDark-color mt-3">Order Summary</h3>
                <div className="discount-summary">
                    <p className="summary-font">Discount <span>{code.discount} THB</span></p>
                    <p className="summary-font">Shiping Fee <span>{shippingFee} THB</span></p>
                </div>
            </div>
            <div className="col-12">
                <div className="dashLine-cart"></div>
            </div>
            <div className="col-12 mt-4 d-flex justify-content-between">
                <h3 className="mainDark-color">
                    Grand Total
                </h3>   
                <h3 className="mainDark-color">
                    {calDiscountPrice()} THB
                </h3> 
            </div>

            
        </div>
    )
}