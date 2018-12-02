import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <h2>Boards</h2>
      <nav>
        <ul>
          <li>
            <Link to="/board">Task List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default home;
