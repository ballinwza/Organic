import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import {fetchAuthAsync} from '../redux/actions/authAction'
import { Link, useNavigate } from "react-router-dom"
import { hideNavbar } from "../components/Navbar"
import { InputSignin } from "../components/uiComponents/Input"
import { ButtonSignin } from "../components/uiComponents/Button"

export const SignIn = () =>{
    // Redux Set
    const dispatch = useDispatch()
    const {loading, error} = useSelector(state=>state.status)
    const {user} = useSelector(state=>state.auth)

    // Router-dom
    const navigate = useNavigate()

    // Email & Password State
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Email & Password Validation State
    const [validateEmail , setValidateEmail] = useState('')
    const [validatePassword, setValidatePassword] = useState('')

    // Reg Expression
    const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{1,}/
    const regPassword = /^[0-9]{1,}$/
    
    // Function
    const showLoader = () =>{
        return(
            <div className="loader-container">
                <div className="loader"> </div>
            </div>
        )
    } 

    const checkEmail = (e, set, reg, validator) =>{
        set(e.target.value)
        if(reg.test(e.target.value)){
            validator('')
        }else{
            validator('invalid-input')
        }
    }

    const checkError = () =>{
        dispatch(fetchAuthAsync(email, password));
        if(error && (!regEmail.test(email) || !regPassword.test(password))){
            setValidateEmail('invalid-input')
            setValidatePassword('invalid-input')
        }
    }

    // Return JSX
    return(
        <div className="signin-container" onLoad={()=>hideNavbar()}>
            <img className="imgBackground" src={require("../images/background-01.jpg")} alt="background"/>
            {loading ? showLoader() : ""}
            <div className="signin-card-container">
                <div className="row">
                    <div className=" col-12 ">
                        <div className="signin-card-container-header">
                            <Link to="/" ><img src={require("../images/Logo02.png")} alt="organic"/></Link>
                            <Link to="/"><h1>ORGANIC</h1></Link>
                            <h3>Sign in Your Account</h3>
                        </div>
                    </div>

                    <div className="col-10 col-lg-7 m-auto">
                        <div className="signin-input-group">
                            <InputSignin className={`${ validateEmail }`} textLabel="Email" name="email" type="email" value={email} setValue={(e)=>checkEmail(e, setEmail, regEmail, setValidateEmail)}/>
                            <InputSignin className={`${ validatePassword }`} textLabel="Password" name="password" type="password" value={password} setValue={(e)=>checkEmail(e, setPassword, regPassword, setValidatePassword)}/>
                        </div>
                    </div>

                    <div className="col-10 col-lg-7 m-auto my-3">
                        <ButtonSignin className="btn-mainDark" buttonText="SIGN IN" type="submit" onClick={()=>checkError()}/>
                    </div>

                    <div className="col-10 col-lg-7 m-auto">
                        <div className="row my-4">
                            <div className="col relative"><div className="dashLine"></div></div>
                            <div className="col-2"><p>OR</p></div>
                            <div className="col relative"><div className="dashLine"></div></div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-7 m-auto pb-5">
                        <span className="mainDark-color me-3">Not a Member?</span>
                        <Link to="/"><span>Register</span></Link>
                    </div>

                    <div className="d-none">
                        {setTimeout(()=>{ if(user !== null){ navigate('/') } },10)}
                    </div>


                </div>

            </div>
        </div>
    )
}