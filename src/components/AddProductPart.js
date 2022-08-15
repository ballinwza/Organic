import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCartList } from "../redux/actions/cartAction"
import { useNavigate } from "react-router-dom" 
import ImageUploading from "react-images-uploading"
import { DefaultInput } from "./uiComponents/Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons" 

export const AddProductPart = () =>{
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(null) 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state=>state.cart)

    const [images, setImages] = useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    }; 

    const afterAdd = () =>{
        let sumData = {
            id: cart.length + 1,
            title: title,
            price: parseInt(price),
            quantity: 0,
            image: `${images[0].checkUrl}`
        }

        if(title !== '' && parseInt(price) !== 0 && images.length !== 0){
            dispatch(addCartList(sumData));
            alert("Data is added")
            navigate('/');
        }else{
            alert("Please fill information")
        }
    } 


        return(
            <div className="container-white-primary add-primary">
                <div className="col-12">
                    <h2>Add Product</h2>
                </div>
                <div className="col-12"><div className="dashLine-cart"></div></div>
                <div className="col-12">
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="checkUrl"
                        acceptType={["jpg","gif","png"]}
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                        }) => (
                            <div className="upload-container upload__image-wrapper">
                                <button className="drop-btn-primary"
                                    style={isDragging ? { color: 'var(--deleteColor)', borderColor: 'var(--deleteColor)' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    Click or Drop <br/>image here

                                </button>

                                {imageList.map((image, index) => (
                                    <div key={index} >
                                        <div className="image-item">
                                            <img src={image['checkUrl']} alt="" width="100"/>
                                            <div className="image-btn-delete">
                                                <button onClick={() => onImageRemove(index)}><FontAwesomeIcon icon={faTrashCan}/></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        )}
                    </ImageUploading>
                </div>
                <div className="col-12 mt-3">
                    <DefaultInput type="text" textLabel="Product" name="add-title" placeholder="baifern" 
                    value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className="col-12 mt-3">
                    <DefaultInput type="number" textLabel="Price" name="add-price" placeholder="200" 
                    value={price} onChange={(e)=>setPrice(e.target.value)} currency="THB"/>
                </div>
                <div className="col-12"><div className="dashLine-cart"></div></div>
                <div className="col-12 add-btn">
                    <button className="myBtn btn-mainDark " onClick={()=>afterAdd()}>Submit</button>
                </div>
            </div>
        )

}