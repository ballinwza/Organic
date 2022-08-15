export const ADD_PROMO = "ADD_PROMO"

export const disCode = [
    { 
        code: "ABC123456",
        value: 100 
    },
    { 
        code: "AAA123456",
        value: 200 
    }
] 


export const codeReducer = (state=disCode, action)=>{
    switch(action.type){
        case ADD_PROMO :
            return [...state, action.payload];
        default:
            return state;
    }
}