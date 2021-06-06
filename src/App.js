import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation.js";
import Pages from "./components/Pages.js";
import { Route } from "react-router-dom";
import Register from "./components/register/Register.js";
import Login from "./components/login/Login.js";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "./components/constants.js";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main style={{ marginTop: "100px" }}>
        <Route path={REGISTER_ROUTE}>
          <Register />
        </Route>
        <Route path={LOGIN_ROUTE}>
          <Login />
        </Route>
        {authenticated && <Pages />}
        {/* {!authenticated && <Redirect to={LOGIN_ROUTE} />} */}
      </main>
    </div>
  );
}

export default App;
