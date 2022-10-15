import React from "react";
import styled from 'styled-components';
import Login from './Login';
import SignUp from './Signup';
import About from "./About";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .item {
    padding: 18px 10px;
    color: white;
  }

  @media all {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

const RightNav = ({ open }) => {
    return (
        <Router>
        <Ul open={open}>
            <Link className="item" to={"signup"}>SignUp</Link>
            <Link className="item" to={"login"}>Login</Link>
            <Link className="item" to={"about"}>About</Link>
      </Ul>
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
      </Routes>
      </Router>
    )
}

export default RightNav;