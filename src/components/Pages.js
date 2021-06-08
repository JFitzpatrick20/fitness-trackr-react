import { Route } from "react-router-dom";
import Activities from "./activities/Activities.js";
import MyRoutines from "./myRoutines/MyRoutines.js";
import WelcomeScreen from "./Home.js";
import Routines from "./routines/Routines.js";
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
        <WelcomeScreen />
      </Route>
      <Route path={ROUTINES_ROUTE}>
        <Routines />
      </Route>
      <Route path={MY_ROUTINES_ROUTE}>
        <MyRoutines />
      </Route>
      <Route path={ACTIVITIES_ROUTE}>
        <Activities />
      </Route>
    </>
  );
};

export default Pages;
