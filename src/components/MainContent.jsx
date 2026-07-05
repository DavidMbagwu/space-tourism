import React from "react";
import { PageContext } from "../App.jsx";
import HomeContent from "./HomeContent";
import DestinationContent from "./DestinationContent";
import CrewContent from "./CrewContent";
import TechnologyContent from "./TechnologyContent";

export default function MainContent() {
  const { currentPage } = React.useContext(PageContext);

  let currentContent;

  switch (currentPage) {
    case "home":
      currentContent = <HomeContent />;
      break;
    case "destination":
      currentContent = <DestinationContent />;
      break;
    case "crew":
      currentContent = <CrewContent />;
      break;
    case "technology":
      currentContent = <TechnologyContent />;
      break;
    default:
      currentContent = <HomeContent />;
  }

  return (
    <>
      <div className="main-content">{currentContent}</div>
    </>
  );
}
