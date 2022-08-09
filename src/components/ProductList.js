import { useSelector, useDispatch } from "react-redux"
import {useNavigate } from 'react-router-dom'
import { addCart } from "../redux/actions/cartAction" 

export const ProductList = ()=>{
    const product = useSelector((state)=>state.cart)
    const {user} = useSelector(state=>state.auth)
    const navigate = useNavigate ()
    const dispatch = useDispatch() 

    const checkEvenOdd = (value)=>{return (value%2 === 0 ? "even" : "odd")} 

    return(
        <div className="product-container">
            {product.length === 0 ? <p>Product is empty</p>: 
                product.map((item)=>{
                    return(
                        <div className="product-card-container">
                            <div className={`product-card ${checkEvenOdd(item.id)}`} key={item.id}>
                                <img src={item.image} alt={item.title}/>
                                <h3>{item.title}</h3> 
                                <p>Price : {item.price} THB</p> 
                                <button className="btn btn-mainDark" onClick={ ()=>{ !user ? navigate('/signin') : dispatch(addCart({...item, quantity: 0}))} }>
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