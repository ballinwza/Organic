import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { setAuth } from "../redux/actions/authAction"
import { useState } from "react"

export const hideNavbar = ()=>{
    document.getElementById("mainNavbar").classList.add("d-none")
}
export const showNavbar = ()=>{
    document.getElementById("mainNavbar").classList.remove("d-none")
}

export const initialStateNavbar = [
    {id:"navlist1", status: "active"},
    {id:"navlist2", status: ""},
    {id:"navlist3", status: ""},
    {id:"navlist4", status: ""},
    {id:"logo", status:""}
]

export const Navbar = () =>{
    const {user} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
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

    const NavItem = ({id, to, content, className, onClick}) =>{
        return(
            <li id={`${id}`} className="nav-item">
                <Link to={`${to}`} className={`nav-link ${className}`} onClick={onClick}>{content}</Link>
            </li>
        )
    }
    const Test = () =>{
        return(
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand" onClick={()=>setNavlist(initialStateNavbar)}>
                        <Link to ="/"><img src={require("../images/Logo01.png")} alt="organic-logo"/></Link>
                        <Link to="/"><h1>ORGANIC</h1></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#testNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="testNav">
                        <ul className="navbar-nav">
                            <NavItem to="/" id={navlist[0].id} className={navlist[0].status} content="Prodcut" onClick={()=>updateState(navlist[0].id)}/>
                            <NavItem to="/signin" id={navlist[3].id} className={navlist[3].status} content="Sign In"/>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
    const UnAuthNavbar = ()=>{
        return(
            <div className={`navbar `}> {/*navbar-expand-sm*/}
                <div className="navbar-logo" onClick={()=>setNavlist(initialStateNavbar)}>
                    <Link to ="/"><img src={require("../images/Logo01.png")} alt="organic-logo"/></Link>
                    <Link to="/"><h1>ORGANIC</h1></Link>
                </div>

                <div id="navbarText" className="navbar-navlist">
                    <div id={navlist[0].id} className={`nav-list ${navlist[0].status}`} >
                        <Link to="/" onClick={()=>updateState(navlist[0].id)}>Products</Link>
                    </div>

                    <div id={navlist[3].id} className={`nav-list ${navlist[3].status}`}>
                        <Link to="/signin">Sign In</Link>
                    </div>
                </div>
            </div>
        )
    }

    const AuthNavbar = ()=>{
        let cart = useSelector((state)=>{return state.cart})
        const {user} = useSelector(state=>state.auth)

        const setNull = ()=>{
            dispatch(setAuth(null));
            dispatch(cart=[])
        }

        return(
            <div className="navbar">
                <div className="navbar-logo" onClick={()=>setNavlist(initialStateNavbar)}>
                    <Link to ="/"><img src={require("../images/Logo01.png")} alt="organic-logo"/></Link>
                    <Link to="/"><h1>ORGANIC</h1></Link>
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
        <div id="mainNavbar" className={`navbar`} >
            {/* {user ? <AuthNavbar/> : <UnAuthNavbar/>} */}
            {<Test/>}
        </div>
    )
}
