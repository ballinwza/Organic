export const InputSignin = ({textLabel,name,type ,value,setValue, className }) =>{
    return(
        <div className="row">
            <div className="col-12 text-start">
                <label className="ms-3" htmlFor={name}>{textLabel}</label>
            </div>
                <div className="col-12 mb-4">
                <input className={`ps-3 ${className}`} type={type} name={name} value={value} onChange={setValue}/>
            </div>
        </div> 
    )
}

export const DefaultInput = ({textLabel,name,type ,value,onChange, className, placeholder ,currency }) =>{
    return(
        <div>
            <div className="row">
                <div className="col-12 text-start">
                    <label className="ms-3" htmlFor={name}>{textLabel}</label>
                </div>
                <div className="col-12 mb-4 d-flex align-center">
                    <input className={`ps-3 ${className}`} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
                    <h3 className="ms-3">{currency}</h3>
                </div>
            </div> 
        </div>
    )
}