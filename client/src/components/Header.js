import React from 'react';
import { Link } from 'react-router-dom';



const Header = props => {
return (
<div className="nav-bar">

<Link className="nav-links" to="/login">Login</Link>
<Link className="nav-links" to="/register">Register</Link>
<Link className="nav-links" to="/private">Students</Link>

</div>
)

}
export default Header;