export const DISCOUNT = "DISCOUNT"
export const ALERT = "ALERT" 


const initialState = { 
    status: false,
    discount: 0
} 

export const discountReducer = (state=initialState, action) =>{ 
    
    const findPromotion= () =>{
        let promo
        let findPromo = action.payload.find((item)=> item.code === action.value) 
        if(findPromo === undefined){ 
            promo = {
                status: true,
                discount: 0
            } 
        }else{ 
            promo = {
                status: false,
                discount: findPromo.value
            } 
        }
        return promo
    }

    switch(action.type){
        case DISCOUNT :
            return findPromotion()
        case ALERT : 
            return{
                ...state,
                status: action.payload
            } 
        default :
            return state
    }
}