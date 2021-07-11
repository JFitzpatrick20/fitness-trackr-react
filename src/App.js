import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation.js";
import Pages from "./components/Pages.js";
import { Route } from "react-router-dom";
import Register from "./components/register/Register.js";
import Login from "./components/login/Login.js";
import {
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  HOME_ROUTE,
} from "./components/constants.js";
import WelcomeScreen from "./components/Home";
function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);
  const [routines, setRoutines] = useState([
    {
      id: "",
      creatorId: "",
      isPublic: true,
      name: "",
      goal: "",
      creatorName: "",
      activities: [],
    },
  ]);

  const [activities, setActivities] = useState([
    {
      id: "",
      name: "",
      description: "",
    },
  ]);

  return (
    <div className="App">
      <header>
        <Navigation />
        <Route path={HOME_ROUTE}>
          <WelcomeScreen />
        </Route>
      </header>
      <main style={{ marginTop: "100px" }}>
        <Route path={REGISTER_ROUTE}>
          <Register />
        </Route>
        <Route path={LOGIN_ROUTE}>
          <Login />
        </Route>
        {authenticated && (
          <Pages
            routines={routines}
            setRoutines={setRoutines}
            activities={activities}
            setActivities={setActivities}
          />
        )}
        {/* {!authenticated && <Redirect to={LOGIN_ROUTE} />} */}
      </main>
    </div>
  );
}

export default App;
