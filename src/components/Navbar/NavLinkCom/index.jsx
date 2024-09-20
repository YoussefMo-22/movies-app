import { Link } from "react-router-dom";

export default function NavLinkCom({ navLink }) {
    return ( 
    <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={navLink.path}>{navLink.name}</Link>
    </li> 
    );
}