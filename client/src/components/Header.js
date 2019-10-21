import React from 'react';
import { Link } from 'react-router-dom';



const Header = props => {
return (
<div className="nav-bar">

<Link to="/login">Login</Link>
<Link to="register">Register</Link>
<Link to="/private">Students</Link>

</div>
)

}
export default Header;