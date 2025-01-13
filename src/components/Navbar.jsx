import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/navbar.scss";
import { FaBars } from 'react-icons/fa';

function Navbar({visible, show}) {

	return (
		<div className='side-bar'>
			<div className="mobile-nav">
				<button className="mobile-nav-btn" onClick={() => show(!visible)}>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? 'navbar' : ''}>
				<div className='navtop-gap'>
					<NavLink className="logo" to="/">
						<img src={"/images/Logo.png"} alt="logo" />
					</NavLink>
					<div className="links">
						<NavLink to="/dashboard" className="nav-link">
							<img src={"/images/dashboard.png"} alt="logo" />
							<span>Dashboard</span>
						</NavLink>
						<NavLink to="/company" className="nav-link">
						<img src={"/images/company.png"} alt="logo" />
							<span>Company</span>
						</NavLink>
						<NavLink to="/documents" className="nav-link">
						<img src={"/images/document.png"} alt="logo" />
							<span>Documents</span> 
						</NavLink>
						<NavLink to="/services" className="nav-link">
						<img src={"/images/service.png"} alt="logo" />
							<span>Services</span> 
						</NavLink>
						<NavLink to="/compliance" className="nav-link">
						<img src={"/images/Compliance.png"} alt="logo" />
							<span>Compliance</span> 
						</NavLink>
						<NavLink to="/books" className="nav-link">
						<img src={"/images/book.png"} alt="logo" />
							<span>Books</span> 
						</NavLink>
						<NavLink to="/money" className="nav-link">
						<img src={"/images/money.png"} alt="logo" />
							<span>Money</span> 
						</NavLink>
					</div>
				</div>

				<div className="links">
					<NavLink to="/settings" className="nav-link">
						<img src={'/images/citybuildings.png'} alt='citybuildings'/>
						<span>Your Company</span> 
					</NavLink>
				</div>
			</nav>
		</div>
  );
}

export default Navbar;
