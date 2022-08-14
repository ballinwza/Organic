import { useSelector, useDispatch } from "react-redux"
import {useNavigate } from 'react-router-dom'
import { addCart } from "../redux/actions/cartAction" 
import { currency } from "./uiComponents/currency"

export const ProductList = ()=>{
    const product = useSelector((state)=>state.cart)
    const {user} = useSelector(state=>state.auth)
    const navigate = useNavigate ()
    const dispatch = useDispatch() 


    return(
        <div className={`product-container`}>
            {product.length === 0 ? <p>Product is empty</p>: 
                product.map((item, index)=>{
                    return(
                        <div className={`product-card-container`} key={item.id}>
                            <div className={`product-card`} >
                                <img src={item.image} alt={item.title}/>
                                <h3>{item.title}</h3> 
                                <p>Price : {currency(item.price)} THB</p> 
                                <button className="myBtn myBtn151 btn-mainDark" onClick={ ()=>{ !user ? navigate('/signin') : dispatch(addCart({...item, quantity: 0}))} }>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    )
                })   
            }
        </div>
    )
}