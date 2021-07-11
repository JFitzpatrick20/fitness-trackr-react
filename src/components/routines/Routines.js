import React, { useState, useEffect } from "react";
import { getRoutines } from "../api/API";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

// const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

const Routines = ({ routines, setRoutines }) => {
  const [activities, setActivities] = useState();

  useEffect(() => {
    getRoutines()
      .then((routine) => {
        setRoutines(routine);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <>
      <h1>Routines</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" id="bold">
                Routine Name
              </TableCell>
              <TableCell align="right" id="bold">
                Activities
              </TableCell>
              <TableCell align="right" id="bold">
                Goal
              </TableCell>
              <TableCell align="right" id="bold">
                Creator
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {routines.map((routine) => {
              return (
                <TableRow key={routine.name}>
                  <TableCell align="left">{routine.name}</TableCell>
                  <TableCell align="right">
                    {routine.activities.map(
                      ({
                        id,
                        name,
                        description,
                        duration,
                        count,
                        routineActivityId,
                        routineId,
                      }) => (
                        <p key={id}>
                          Name:{name},Description:{description},Count:{count},
                          Duration:
                          {duration}
                        </p>
                      )
                    )}
                  </TableCell>
                  <TableCell align="right">{routine.goal}</TableCell>
                  <TableCell align="right">{routine.creatorName}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Routines;
