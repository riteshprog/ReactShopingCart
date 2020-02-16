import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../logo.svg";


export default class NavBar extends Component {
  render() {
    return (
      <NavBar className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/Basket" className="ml-auto">
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
                  </Link>
      </NavBar>
    );
  }
  }

