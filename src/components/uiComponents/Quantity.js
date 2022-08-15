export const Quantity = ({className, quantity, increment, decrement}) =>{
    return(
        <div className={`quantity-container ${className}`}>
            <p className="sign" onClick={decrement}>-</p>
            <p className="num"> {quantity} </p>
            <p className="sign" onClick={increment}>+</p>
        </div>
    )
} 