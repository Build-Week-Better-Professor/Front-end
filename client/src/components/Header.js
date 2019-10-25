import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = props => {
return (
<div className="nav-bar">

<NavLink className="nav-links" to="/login"><div>Login</div></NavLink>
<NavLink className="nav-links" to="/register"><div>Register</div></NavLink>
<NavLink className="nav-links" to="/"><div>My Account</div></NavLink>

</div>
)

}
export default Header;