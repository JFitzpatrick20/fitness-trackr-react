import React from "react";
import Button from "react-bootstrap/Button";
import { CREATE_ROUTINE_ROUTE } from "../constants";
import { Link } from "react-router-dom";

const RoutineHeader = () => {
  return (
    <div>
      <Button variant="dark">
        <Link to={CREATE_ROUTINE_ROUTE} style={{ textDecoration: "none" }}>
          Create New Routine
        </Link>
      </Button>
    </div>
  );
};

export default RoutineHeader;
