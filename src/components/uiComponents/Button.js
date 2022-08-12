export const ButtonSignin = ({buttonText, className, type, onClick})=>{
    return(
        <div className="btn-container row">
            <button className={`myBtn ${className}`} type={type} onClick={onClick}>
                {buttonText}
            </button>
        </div>
    )
}