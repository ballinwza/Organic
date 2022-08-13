import { ProductList } from "../components/ProductList"
import { showNavbar } from "../components/Navbar"

export const Product = () =>{
    const lorem = `Lorum Ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
    anim id est laborum.`

    return(
        <div> 
            <div className="row" onLoad={()=>showNavbar()}>
                <div className="col-12 col-lg-6">
                    <div className="product-detail">
                        <h2>HEAD PARAGRAPH</h2>
                        <p>
                            {lorem}
                            {lorem}
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg d-flex align-center">
                    <div className="product-image">
                        <img src={require("../images/productDetail-01.jpg")} alt="" />
                    </div> 
                </div>
            </div>
            <div className="row">
                <ProductList/>
            </div>
        </div> 
    )

}