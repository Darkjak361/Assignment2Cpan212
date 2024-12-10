import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        <Link to="/signup">Sign Up</Link> | <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default HomePage;
