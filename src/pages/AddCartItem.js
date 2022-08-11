import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCartList } from "../redux/actions/cartAction"
import { useNavigate } from "react-router-dom" 
import { showNavbar } from "../components/Navbar"

export const AddCartItem = () =>{
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state=>state.cart)
    let sumData = {
        id: cart.length + 1,
        title: title,
        price: parseInt(price),
        quantity: 0
    }

    const afterAdd = () =>{
        dispatch(addCartList(sumData)); 
        if(title !== '' && parseInt(price) !== 0){
            alert("Data is added")
            navigate('/');
        }else{
            alert("Please fill information")
        }
    }

    return(
        <div onLoad={()=>showNavbar()}> 
            title<input type="text" name="title" onChange={(e)=>setTitle(e.target.value)}/><br/>
            price<input type="number" name="price" onChange={(e)=>setPrice(e.target.value)}/><br/>

            <button onClick={()=>afterAdd()}>Submit</button>
        </div>
    )
}