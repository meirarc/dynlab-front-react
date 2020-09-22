import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <header className="App-header">
      <h1 className="flex-1">Book Store</h1>
      <div className="float-right">
        <Link to="/">Books</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}

export default Nav;