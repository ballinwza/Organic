export const currency = (value) =>{
    const getCurrency = (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    return getCurrency
}