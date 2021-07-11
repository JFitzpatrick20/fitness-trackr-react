import React from "react";
import Button from "react-bootstrap/Button";
import { CREATE_ACTIVITY_ROUTE } from "../constants";
import { Link } from "react-router-dom";

const ActivityHeader = () => {
  return (
    <div>
      <Button variant="dark">
        <Link to={CREATE_ACTIVITY_ROUTE} style={{ textDecoration: "none" }}>
          Create New Activity
        </Link>
      </Button>
    </div>
  );
};

export default ActivityHeader;
