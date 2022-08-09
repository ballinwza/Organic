import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import {fetchAuthAsync} from '../redux/actions/authAction'
import { useNavigate } from "react-router-dom"

export const SignIn = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {loading, error} = useSelector(state=>state.status)
    const {user} = useSelector(state=>state.auth)
    const navigate = useNavigate() 

    return(
        <div>
            Sign In
            <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit" onClick={()=>dispatch(fetchAuthAsync(email, password))}>submit</button>
            {loading ? "Loading..." : ""}
            <div className="d-none">
                {setTimeout(()=>{ if(user !== null){ navigate('/') } },10)}
            </div>
            
            {error && <p>{error}</p>}
        </div>
    )
}