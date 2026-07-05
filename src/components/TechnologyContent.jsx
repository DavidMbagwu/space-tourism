import React from "react";
import { technology } from "../data.json";

export default function TechnologyContent() {
  React.useEffect(() => {
    document.body.classList.add("technology-bg");
    return () => {
      document.body.classList.remove("technology-bg");
    };
  }, []);

  const [selectedTech, setSelectedTech] = React.useState("Launch vehicle");

  var currentTechImg;

  var currentTechData = technology.find((tech) => {
    return tech.name === selectedTech;
  });

  var bubbleList = technology.map((member, index) => {
    return (
      <li
        className={`tech-option-bubble text-preset-4 ${selectedTech === member.name ? "tech-active-bubble" : ""}`}
        onClick={() => setSelectedTech(member.name)}
      >
        {index + 1}
      </li>
    );
  });

  const formattedName = selectedTech.toLowerCase().replace(/\s+/g, "-");

  currentTechImg = `src/assets/technology/image-${formattedName}-portrait.jpg`;
  return (
    <>
      <div className="tech-left-holder">
        <ul className="tech-options">{bubbleList}</ul>
        <div className="tech-left-content">
          <p className="text-preset-4 dim-white">THE TERMINOLOGY...</p>
          <h1 className="text-preset-3">
            {currentTechData.name.toUpperCase()}
          </h1>
          <p className="text-preset-9">{currentTechData.description}</p>
        </div>
      </div>
      <div className="technology-container">
        <img className="tech-image" src={currentTechImg} alt={selectedTech} />
      </div>
    </>
  );
}

// src\assets\technology\image-launch-vehicle-landscape.jpg
