import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div style={{ marginTop: "50px" }}>
      <nav className="navbar fixed-top navbar-expand-lg">
        <Link className="navbar-brand text-white" to="/">
          Motabhaai
        </Link>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-item nav-link active text-white" to="/">
              Home <span className=" sr-only">(current)</span>
            </Link>
            <Link className="text-white nav-item nav-link" to="/anime">
              Anime
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
