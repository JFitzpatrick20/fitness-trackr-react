import React, { useEffect, useState } from "react";
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
import RoutineRow from "../myRoutines/RoutineRow.js";

const getAllRoutines = () => {
  async function pullRoutines() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_FITNESS_TRACKR_API_URL}/routines`
      );
      return data;
      console.log(data);
    } catch (error) {
      throw error;
    }
  }
  pullRoutines();
};

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  console.log(routines);

  useEffect(() => {
    const routines = getAllRoutines();
    setRoutines(routines);
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Goal</TableCell>
              <TableCell align="right">Creator Name</TableCell>
              <TableCell align="right">Is Public</TableCell>
              <TableCell align="right">Activities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {routines.map((routine) => {
              return <RoutineRow key={routine.id} routine={routine} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    // const createRoutineHTML = (routine) => {
    //   return (
    //     <div className="routine-card">
    //       <div className="card-name">
    //         <b>Routine:</b>
    //         <p>{routine.name}</p>
    //       </div>
    //       <div className="card-creator">
    //         <b>Creator:</b> <p>{routine.creatorName}</p>
    //       </div>
    //       <div className="card-count">
    //         <b>Count:</b> <p>{routine.count}</p>
    //       </div>
    //       <div className="card-duration">
    //         <b>Duration:</b> <p>{routine.duration}</p>
    //       </div>
    //       <div className="card-goal">
    //         <b>Goal:</b>
    //         <p>{routine.goal}</p>
    //         <div className="card-activity">
    //           <b>Activity:</b>
    //           {routine.activities.map(
    //             ({
    //               id,
    //               name,
    //               description,
    //               duration,
    //               count,
    //               routineActivityId,
    //               routineId,
    //             }) => (
    //               <p key={id}>{name}</p>
    //             )
    //           )}
    //         </div>
    //       </div>
    //     </div>
  );
};
export default Routines;
