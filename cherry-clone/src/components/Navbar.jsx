import React from 'react'
import logo from "../assets/logo.svg";
const navbarOption =[ {
    iconName: "person_outline",
    label: "Sign In",
    }, {
        iconName: "shopping_bag",
        label: "Cart",
    }, {
        iconName: "support",
        label: "Help",
    },  {
        iconName: "search",
        label: "Search",
    },
   
];
 const Navbar = (props) => {
  return (
    <section className="navbar">
    <div className="container">
        <img className="logo" src={logo} /> 
        <div className="location">
            <span className="city"> {props.city}</span>
            <span className="state">
                {props.state},{props.country} </span>
        </div>
        <div className="navbar-options">
            {navbarOption.map((navbarOption)=>(
            <div key={navbarOption.iconName} className="navbar-option">
                <span className="material-icons"> {navbarOption.iconName}</span>
                {navbarOption.label}
            </div>
            ))}   
        </div>
    </div>
</section>
  )
}; 
export default Navbar;
