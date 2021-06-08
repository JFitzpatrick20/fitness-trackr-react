import React from "react";

const WelcomeScreen = () => {
  return (
    <div stle={{}}>
      <header>
        <h1 style={{ fontSize: "75px", textDecoration: "bold" }}>
          Fitness Tracker
        </h1>
      </header>
      <main style={{ fontStyle: "italic", fontSize: "35px" }}>
        <p>Track Your Routines and Compare with others!</p>
        <p>SignIn to modify Your Routines and Activities!</p>
        <p>If you do not have an account, Register for one today!</p>
      </main>
    </div>
  );
};

export default WelcomeScreen;
