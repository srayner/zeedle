import React from "react";
import BoardLink from "../home/board-link";

const home = () => {
  return (
    <div>
      <h2>Boards</h2>
      <nav>
        <ul>
          <BoardLink to="/board">Task List</BoardLink>
        </ul>
      </nav>
    </div>
  );
};

export default home;
