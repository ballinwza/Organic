import { CartItem } from "../components/CartItem" 
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { showNavbar } from "../components/Navbar"

export const Cart = () =>{
    const {user} = useSelector(state=>state.auth)
    const navigate = useNavigate()
    if (!user){
        navigate("/")
    }else{
        return(
            <div onLoad={()=>showNavbar()}> 
                <CartItem/>
            </div>
        )
    }

}