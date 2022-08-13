import { Link } from "react-router-dom"

export const NavItem = ({id, to, content, className, onClick}) =>{
    return(
        <li id={`${id}`} className={`nav-item ${className}`}>
            <Link to={`${to}`} className={`nav-link`} onClick={onClick}>{content}</Link>
        </li> 
    )
} 