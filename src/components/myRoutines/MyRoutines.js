import React, { useState, useEffect } from "react";
import axios from "axios";
import AddBoxIcon from "@material-ui/icons/AddBox";
import RoutineRow from "./RoutineRow";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const myUsernameFetch = (myToken) => {
  try {
    return axios
      .get(`${process.env.REACT_APP_FITNESS_TRACKR_API_URL}users/me`, {
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

const myRoutinesFetch = (username, myToken) => {
  try {
    return axios
      .get(
        `${process.env.REACT_APP_FITNESS_TRACKR_API_URL}users/${username}/routines`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${myToken}`,
          },
        }
      )
      .then(({ data }) => {
        return data;
      });
  } catch (err) {
    console.error(err);
  }
};

const RenderModal = () => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const MyRoutines = () => {
  let myUsername;
  const [myRoutines, setMyRoutines] = useState([]);

  useEffect(async () => {
    const myToken = JSON.parse(localStorage.getItem("token"));
    if (myToken) {
      myUsername = await myUsernameFetch(myToken);
      const routines = await myRoutinesFetch("myUsername", myToken);
      setMyRoutines(routines);
    }
  }, []);

  const onRemoveRoutine = (idx) => {
    const copy = [...myRoutines];
    copy.splice(idx, 1);
    setMyRoutines(copy);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Goal</TableCell>
            <TableCell align="right">Creator Name</TableCell>
            <TableCell align="right">Is Public</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <AddBoxIcon
              align="right"
              onClick={() => {
                debugger;
                RenderModal();
              }}
            ></AddBoxIcon>
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
  );
};

export default MyRoutines;
