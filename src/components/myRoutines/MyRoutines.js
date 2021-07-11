import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import CreateRoutineForm from "../routines/CreateRoutine";
import RoutineRow from "./RoutineRow";
import RoutineHeader from "../routines/RoutineHeader";

const BASE_URL = `${process.env.REACT_APP_FITNESS_TRACKR_API_URL}`;

const myUsernameFetch = async (myToken) => {
  try {
    return await axios
      .get(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myToken}`,
        },
      })
      .then(({ data: { username } }) => {
        return username;
      });
  } catch (err) {
    console.error(err);
  }
};

const myRoutinesFetch = async (username, myToken) => {
  try {
    return await axios
      .get(`${BASE_URL}/users/${username}/routines`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myToken}`,
        },
      })
      .then(({ data }) => {
        return data;
      });
  } catch (err) {
    console.error(err);
  }
};

const MyRoutines = () => {
  let myUsername;
  const [myRoutines, setMyRoutines] = useState([]);
  const copy = [...myRoutines];
  const onRemoveRoutine = (idx) => {
    copy.splice(idx, 1);
    setMyRoutines(copy);
  };

  useEffect(() => {
    (async () => {
      const myToken = JSON.parse(localStorage.getItem("token"));
      if (myToken) {
        myUsername = await myUsernameFetch(myToken);
        const routines = await myRoutinesFetch(myUsername, myToken);
        setMyRoutines(routines);
      }
    })();
  }, []);

  if (copy.length > 0) {
    return (
      <>
        <RoutineHeader />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell id="bold" align="left">
                  ID
                </TableCell>
                <TableCell id="bold" align="right">
                  Name
                </TableCell>
                <TableCell id="bold" align="right">
                  Goal
                </TableCell>
                <TableCell id="bold" align="right">
                  Creator Name
                </TableCell>
                <TableCell id="bold" align="right">
                  Add Activity
                </TableCell>
                <TableCell id="bold" align="right"></TableCell>
                <TableCell id="bold" align="right">
                  Edit
                </TableCell>
                <TableCell id="bold" align="right">
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myRoutines.map((routine, idx) => {
                return (
                  <RoutineRow
                    key={routine.id}
                    routine={routine}
                    onRemoveRoutine={() => {
                      onRemoveRoutine(idx);
                    }}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  } else {
    return <CreateRoutineForm />;
  }
};

export default MyRoutines;
