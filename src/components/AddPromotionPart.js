import { useState } from "react"
import { useDispatch } from "react-redux" 
import { DefaultInput } from "../components/uiComponents/Input" 
import { addPromotion } from "../redux/actions/discountAction" 
import { useNavigate } from "react-router-dom"
import { ConfirmModal } from "./uiComponents/ConfirmModal"
export const AddPromotionPart = () =>{

    const [ promo, setPromo ] = useState("")
    const [ promoPrice, setPromoPrice ] = useState(null)
    const [ validate, setValidate ] = useState(false)
    const [ invalid, setInvalid ] = useState(false)
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    
    const getPromo = () =>{
        let promoCode = {
            code: promo,
            value: parseInt(promoPrice),
        }
        dispatch(addPromotion(promoCode));
        setValidate(true)
        setTimeout(()=>{
            setValidate(false) 
            navigate("/cart")
        },1000)
    }

    const handleClose = () =>{
        setPromo("")
        setPromoPrice(null)
        setValidate(false) 
        setInvalid(false)
    }

        return(
            <div className="container-white-primary add-primary">
                <ConfirmModal handleClose={handleClose} showValid={validate} showInvalid={invalid} validText="Promotion code was added" invalidText="Please fill Promotion code"/> 

                <div className="col-12">
                    <h2>Add Promotion Code</h2>
                </div>
                <div className="col-12"><div className="dashLine-cart"></div></div> 
                <div className="col-12 mt-3">
                    <DefaultInput type="text" textLabel="Promotion Code" name="promo-title" placeholder="ABC123456" 
                    value={promo} onChange={(e)=>setPromo(e.target.value)} />
                </div>
                <div className="col-12 mt-3">
                    <DefaultInput type="number" textLabel="Discount Price" name="promo-price" placeholder="200" 
                    value={promoPrice} onChange={(e)=>setPromoPrice(e.target.value)}
                    currency="THB"/>
                </div>
                <div className="col-12"><div className="dashLine-cart"></div></div>
                <div className="col-12 add-btn">
                    <button className="myBtn btn-mainDark " onClick={()=> promo === "" && promoPrice === null ? setInvalid(true) : getPromo()}>Submit</button>
                </div>
            </div>
        )

}