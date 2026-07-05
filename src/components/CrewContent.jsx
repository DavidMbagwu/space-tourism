import React from "react";
import { crew } from "../data.json";

export default function CrewContent() {
  React.useEffect(() => {
    document.body.classList.add("crew-bg");
    return () => {
      document.body.classList.remove("crew-bg");
    };
  }, []);

  const [currentCrewMember, setCurrentCrewMember] =
    React.useState("Douglas Hurley");

  var currentCrewImg;
  var currentCrewData = crew.find(
    (member) => member.name === currentCrewMember,
  );

  const formattedName = currentCrewMember.toLowerCase().replace(/\s+/g, "-");

  currentCrewImg = `/assets/crew/image-${formattedName}.png`;

  var bubbleList = crew.map((member) => {
    return (
      <li
        className={`option-bubble ${currentCrewMember === member.name ? "active-bubble" : ""}`}
        onClick={() => setCurrentCrewMember(member.name)}
      ></li>
    );
  });
  return (
    <>
      <div className="content-item left-content">
        <p className="text-preset-4 dim-white">
          {currentCrewData.role.toUpperCase()}
        </p>
        <h1 className="text-preset-3">{currentCrewData.name.toUpperCase()}</h1>
        <p className="text-preset-9 blue-300">{currentCrewData.bio}</p>
        <ul className="crew-options">{bubbleList}</ul>
      </div>
      <div
        key={currentCrewMember}
        className="crew-bottom-fade animate-fade content-item right-content"
      >
        <img
          className="crew-image"
          src={currentCrewImg}
          alt={currentCrewMember}
        />
      </div>
    </>
  );
}
