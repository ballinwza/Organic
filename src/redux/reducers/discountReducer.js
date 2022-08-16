export const DISCOUNT = "DISCOUNT"
export const ALERT = "ALERT"


const initialState = {
    valid: false,
    invalid: false,
    discount: 0
}
 
export const discountReducer = (state=initialState, action) =>{

    const findPromotion= () =>{
        let promo
        let findPromo = action.payload.find((item)=> item.code === action.value)
        if(findPromo === undefined){
            promo = {
                valid: false,
                invalid: true,
                discount: 0
            }
        }else{
            promo = {
                valid: true,
                invalid: false,
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
                valid: false,
                invalid: false,
            }
        default :
            return state
    }
}