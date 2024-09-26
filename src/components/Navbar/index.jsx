import React from 'react'
import { Link } from 'react-router-dom';
import NavLinkCom from './NavLinkCom';
let navLinks = [
    {name: 'Home', path: 'home'},
    {name: 'Movies', path: 'movies'},
    {name: 'People', path: 'people'},
    {name: 'Tv', path: 'tv'},
];
function Navbar({userData,logout}) {
    return (<nav className="navbar navbar-expand-lg bg-transparent navbar-white">
        <div className="container">
            <Link className="navbar-brand" to={'/'}>Noxe</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {userData&&(<ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {navLinks.map((navLink)=>(
                        <NavLinkCom key={navLink.name} navLink={navLink}/>
                    ))}
                </ul>)}
                <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                    {userData&&<li className="nav-item fs-6">
                        <i className="me-2 fa-brands fa-facebook"></i>
                        <i className="me-2 fa-brands fa-twitter"></i>
                        <i className="me-2 fa-brands fa-instagram"></i>
                        <i className="me-2 fa-brands fa-spotify"></i>
                    </li>}
                    {userData==null && <>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='login'>Login</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='register'>Register</Link>
                        </li>
                    </>}
                    {userData&& <li className="nav-item btn text-decoration-none" onClick={logout}>Logout</li>}
                </ul>
            </div>
        </div>
    </nav>);
}

export default Navbar;