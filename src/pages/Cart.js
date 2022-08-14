import { showNavbar } from "../components/Navbar" 
import { CartLeft } from "../components/CartLeft"
import { CartRight } from "../components/CartRight"

export const Cart = () =>{ 

    return(
        <div className="cart-container" onLoad={()=>showNavbar()}>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="cart-left">
                        <CartLeft/>
                    </div>
                </div>

                <div className="col-12 col-lg">
                    <div className="cart-right">
                        <CartRight/>
                    </div>
                </div>

            </div>
        </div>
    )    
} 