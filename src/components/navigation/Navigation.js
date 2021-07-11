import React from "react";
import { Link } from "react-router-dom";
import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  MY_ROUTINES_ROUTE,
  ROUTINES_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  CREATE_ACTIVITY_ROUTE,
  CREATE_ROUTINE_ROUTE,
} from "../constants";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

const Navigation = () => {
  const myToken = JSON.parse(localStorage.getItem("token"));
  const logOut = () => {
    if (!myToken) {
      window.location.href = `${HOME_ROUTE}`;
    } else {
      window.location.href = `${HOME_ROUTE}`;
    }
  };
  if (myToken) {
    return (
      <Navbar bg="dark" variant="dark">
        <nav>
          <div className="loggedIn">
            <Link style={{ marginLeft: "5px" }} to={HOME_ROUTE}>
              Home
            </Link>
            <Link style={{ marginLeft: "5px" }} to={ROUTINES_ROUTE}>
              Routines
            </Link>
            <Link style={{ marginLeft: "5px" }} to={ACTIVITIES_ROUTE}>
              Activities
            </Link>
            <Link style={{ marginLeft: "5px" }} to={MY_ROUTINES_ROUTE}>
              My Routines
            </Link>
            <Link
              style={{ marginLeft: "5px" }}
              to={CREATE_ROUTINE_ROUTE}
            ></Link>
            <Link
              style={{ marginLeft: "5px" }}
              to={CREATE_ACTIVITY_ROUTE}
            ></Link>

            <Link
              to={HOME_ROUTE}
              id="logout-button"
              onClick={() => {
                localStorage.clear("token");
                logOut();
              }}
            >
              Logout
            </Link>
          </div>
        </nav>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" variant="dark">
        <nav>
          <div className="loggedOut">
            <Link style={{ marginLeft: "5px" }} to={HOME_ROUTE}>
              Home
            </Link>
            <Link style={{ marginLeft: "5px" }} to={ROUTINES_ROUTE}>
              Routines
            </Link>
            <Link style={{ marginLeft: "5px" }} to={ACTIVITIES_ROUTE}>
              Activities
            </Link>
            <Link style={{ marginLeft: "5px" }} to={REGISTER_ROUTE} id="admin">
              Register
            </Link>
            <Link style={{ marginLeft: "5px" }} to={LOGIN_ROUTE} id="admin">
              Login
            </Link>
            {}
          </div>
        </nav>
      </Navbar>
    );
  }
};

export default Navigation;
