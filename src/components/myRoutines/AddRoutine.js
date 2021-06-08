import axios from "axios";
import React, { useState } from "react";

const NewRoutine = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const createRoutine = async () => {
    const myToken = JSON.parse(localStorage.getItem("token"));
    return await axios
      .post(`${process.env.REACT_APP_FITNESS_TRACKR_API_URL}/routines`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myToken}`,
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
          isPublic: isPublic,
        }),
      })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setIsPublic(true);
    createRoutine();
    window.location.href = "/my-routines";
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <header>
        <h1 style={{ textDecoration: "bold" }}>Create Routine</h1>
      </header>
      <form onSubmit={onSubmit}>
        <label style={{ color: "white" }}>
          New Routine:
          <input
            type="text"
            onInput={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </label>
        <label style={{ marginLeft: "20px", color: "white" }}>
          New Goal:
          <input
            type="text"
            onInput={(event) => {
              setGoal(event.target.value);
            }}
          ></input>
        </label>
        <button type="submit" style={{ marginLeft: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default NewRoutine;
