import { useState } from "react"
import { useDispatch } from "react-redux" 
import { DefaultInput } from "../components/uiComponents/Input" 
import { addPromotion } from "../redux/actions/discountAction" 
import { useNavigate } from "react-router-dom"
export const AddPromotionPart = () =>{

    const [ promo, setPromo ] = useState("")
    const [ promoPrice, setPromoPrice ] = useState(null)
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    
    const getPromo = () =>{
        let promoCode = {
            code: promo,
            value: parseInt(promoPrice),
        }
        dispatch(addPromotion(promoCode));
        alert("add promotion success")
        navigate("/cart")
    } 

        return(
            <div className="container-white-primary add-primary">
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
                    <button className="myBtn btn-mainDark " onClick={()=>getPromo()}>Submit</button>
                </div>
            </div>
        )

}