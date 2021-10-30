import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const NavbarElements = () => {
	const navSyles={
		color : "white",
		textDecoration: "none",


	}
	return (
		<nav>
			<h3>Logo</h3>
			 <ul className="nav-ul">
				<Link style={navSyles} to={'/'}><li>Home</li></Link>
				 <Link style={navSyles}  to={'/AddContact'}><li>Add Contacts</li></Link>
				 <Link style={navSyles}  to={'/About'}><li>About</li></Link>
			</ul> 
		</nav>
	)
}

export default NavbarElements






