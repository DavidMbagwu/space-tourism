import MainContent from "./MainContent.jsx";
import React from "react";
import { PageContext } from "../App.jsx";

export default function Main() {
  const { currentPage } = React.useContext(PageContext);
  let currentHeading;

  switch (currentPage) {
    case "destination":
      currentHeading = (
        <>
          <span className="heading-number">01</span>{" "}
          <span className="heading-text">Pick your destination</span>
        </>
      );
      break;
    case "crew":
      currentHeading = (
        <>
          <span className="heading-number">02</span>{" "}
          <span className="heading-text">Meet your crew</span>
        </>
      );
      break;
    case "technology":
      currentHeading = (
        <>
          <span className="heading-number">03</span>{" "}
          <span className="heading-text">SPACE LAUNCH 101</span>
        </>
      );
      break;
    default:
      currentHeading = null;
  }

  return (
    <>
      <main>
        <div className="main-heading">{currentHeading}</div>
        <MainContent />
      </main>
    </>
  );
}
