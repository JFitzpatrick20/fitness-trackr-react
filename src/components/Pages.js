import { Route } from "react-router-dom";
import Register from "./register/Register";
import Login from "./login/Login.js";
import Activites from "./activities/Activities.js";
import MyRoutines from "./myRoutines/MyRoutines.js";
import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  ROUTINES_ROUTE,
  MY_ROUTINES_ROUTE,
} from "./constants.js";

const Pages = () => {
  return (
    <>
      <Route path={HOME_ROUTE}>
        <h1>Home Page</h1>
      </Route>
      <Route path={ROUTINES_ROUTE}>
        <h1>Routines Page</h1>
      </Route>
      <Route path={MY_ROUTINES_ROUTE}>
        <MyRoutines />
      </Route>
      <Route path={ACTIVITIES_ROUTE}>
        <Activites />
      </Route>
    </>
  );
};

export default Pages;
