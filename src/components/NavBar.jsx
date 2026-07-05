import React from "react";
import { PageContext } from "../App.jsx";

export default function NavBar() {
  const { currentPage, handlePageChange } = React.useContext(PageContext);

  return (
    <>
      <nav>
        <ol start="0">
          <li className={currentPage === "home" ? "active" : ""}>
            <a
              href="#home"
              className={currentPage === "home" ? "active" : ""}
              onClick={() => handlePageChange("home")}
            >
              Home
            </a>
          </li>
          <li className={currentPage === "destination" ? "active" : ""}>
            <a
              href="#destination"
              className={currentPage === "destination" ? "active" : ""}
              onClick={() => handlePageChange("destination")}
            >
              Destination
            </a>
          </li>
          <li className={currentPage === "crew" ? "active" : ""}>
            <a
              href="#crew"
              className={currentPage === "crew" ? "active" : ""}
              onClick={() => handlePageChange("crew")}
            >
              Crew
            </a>
          </li>
          <li className={currentPage === "technology" ? "active" : ""}>
            <a
              href="#technology"
              className={currentPage === "technology" ? "active" : ""}
              onClick={() => handlePageChange("technology")}
            >
              Technology
            </a>
          </li>
        </ol>
      </nav>
    </>
  );
}
