import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { setAuth } from "../redux/actions/authAction"
import { useState } from "react"


export const Navbar = () =>{
    const {user} = useSelector(state=>state.auth)

    const [navlist, setNavlist]= useState([
        {id:"navlist1", status: "active"},
        {id:"navlist2", status: ""},
        {id:"navlist3", status: ""},
        {id:"navlist4", status: ""},
    ])

    const updateState = (id) => {
        const newState = navlist.map(obj => {
          if (obj.id === id) {
            return {...obj, status: 'active'};
          } if (obj.id !== id){
            return {...obj, status:''}
          }
          return obj;
        });
        setNavlist(newState);
      };

      const UnAuthNavbar = ()=>{
        return(
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={require("../images/Logo01.png")} alt="organic-logo"/>
                    <h1>ORGANIC</h1>
                </div>

                <div className="navbar-navlist">
                    <div id={navlist[0].id} className={`nav-list ${navlist[0].status}`} >
                        <Link to="/" onClick={()=>updateState(navlist[0].id)}>Products</Link>
                    </div>

                    <div id={navlist[3].id} className={`nav-list ${navlist[3].status}`}>
                        <Link to="/signin" onClick={()=>updateState(navlist[3].id)}>Sign In</Link>
                    </div>
                </div>


            </div>
        )
    }

    const AuthNavbar = ()=>{
        let cart = useSelector((state)=>{return state.cart})
        const {user} = useSelector(state=>state.auth)
        const dispatch = useDispatch()
        const setNull = ()=>{
            dispatch(setAuth(null));
            dispatch(cart=[])
        }

        return(
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={require("../images/Logo01.png")} alt="organic-logo"/>
                    <h1>ORGANIC</h1>
                </div>

                <div className="navbar-navlist">
                    <div id={navlist[0].id} className={`nav-list ${navlist[0].status}`} >
                        <Link to="/" onClick={()=>updateState(navlist[0].id)}>Products</Link>
                    </div>

                    <div id={navlist[1].id} className={`nav-list ${navlist[1].status}`} >
                        {user && <Link to="/cart" onClick={()=>updateState(navlist[1].id)}>Cart
                            <span className="nav-number">{cart.reduce((sum,item)=> sum + item.quantity,0)}</span>
                        </Link> }
                    </div>

                    <div id={navlist[2].id} className={`nav-list ${navlist[2].status}`}>
                        <Link to="/addCartItem" onClick={()=>updateState(navlist[2].id)}>Add</Link>
                    </div>

                    <div id={navlist[3].id} className={`nav-list ${navlist[3].status}`}>
                        <Link to="/" onClick={setNull}>Sign Out</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="navbar">
            {user ? <AuthNavbar/> : <UnAuthNavbar/>}
        </div>
    )
}
