import React from "react";
import { Navbar } from "react-bootstrap";
import weatherLogo from "../img/weather-app.png";

const Header = props => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={weatherLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {"  Weather Genie"}
      </Navbar.Brand>
    </Navbar>
  );
};
export default Header;
