import React, { Component } from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import logoII from "../logoII.svg"
import ButtonCont from "./Button"

export default class NavBar extends Component {
  render() {
    return (
        <NavWrap className="navbar navbar-expand navbar-expand-sm navbar-dark">
          <Link to="/">
            <img src={logoII} alt="La migaja icon" style={{width:"50%"}} className="navbar-brand"/>
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link falconText">
                <span className="falconText">Productos </span>
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonCont>
              <span>compra</span>
            </ButtonCont>
          </Link>
        </NavWrap>
    )
  }
}

const NavWrap = styled.div`
  background:var(--pastelPink);
  border-bottom:5px solid var(--falcon);
  border-top:5px solid var(--falcon);
`