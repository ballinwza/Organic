import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import {fetchAuthAsync} from '../redux/actions/authAction'
import { Link, useNavigate } from "react-router-dom"
import { hideNavbar } from "../components/Navbar"

export const SignIn = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {loading, error} = useSelector(state=>state.status)
    const {user} = useSelector(state=>state.auth)
    const navigate = useNavigate() 

    return(
        <div className="signin-container" onLoad={()=>hideNavbar()}>
            <img className="imgBackground" src={require("../images/background-01.jpg")} alt="background"/>

            <div className="signin-card-container">
                <div className="signin-card-container-header">
                    <Link to="/"><img src={require("../images/Logo02.png")} alt="organic"/></Link>
                    <Link to="/"><h1>ORGANIC</h1></Link>
                    <h3>Sign in Your Account</h3>
                </div>
                <div>
                    <input placeholder="email@gmail.com" type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> 
                </div>

                <div>
                    <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                
                <div>
                    <button className="btn btn-mainDark" type="submit" onClick={()=>dispatch(fetchAuthAsync(email, password))}>
                        submit 
                    </button>
                </div>

                    {loading ? "Loading..." : ""} 

                <div className="d-none">
                    {setTimeout(()=>{ if(user !== null){ navigate('/') } },10)}
                </div>

                    {error && <p>{error}</p>} 
            </div>
        </div>
    )
}