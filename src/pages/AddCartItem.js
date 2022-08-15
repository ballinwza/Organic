import { showNavbar } from "../components/Navbar" 
import {AddProductPart} from '../components/AddProductPart'
import { AddPromotionPart } from "../components/AddPromotionPart"

export const AddCartItem = () =>{ 
    return(
        <div className="gray-container add-container" onLoad={()=>showNavbar()}>
            <div className="row">
                <div className="col-12 col-md-7 col-xl-8">
                    <AddProductPart/>
                </div>

                <div className="col-12 col-md col-xl">
                    <AddPromotionPart/>
                </div>
            </div> 
        </div>
    )
}