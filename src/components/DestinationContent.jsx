import React from "react";
import { destinations } from "../data.json";

export default function DestinationContent() {
  React.useEffect(() => {
    document.body.classList.add("destination-bg");
    return () => {
      document.body.classList.remove("destination-bg");
    };
  }, []);

  const [selectedDestination, setSelectedDestination] = React.useState("moon");

  var destinationImg;

  var destinationData = destinations.find(
    (destination) => destination.name.toLowerCase() === selectedDestination,
  );

  destinationImg = `/assets/destination/image-${selectedDestination}.png`;
  return (
    <>
      <div
        key={selectedDestination}
        className="animate-fade content-item left-content"
      >
        <img
          className="destination-image"
          src={destinationImg}
          alt={selectedDestination}
        />
      </div>
      <div className="content-item right-content">
        <div className="destination-options">
          <ul className="underlined">
            <li
              className={`.text-preset-8 blue-300 ${selectedDestination === "moon" ? "active" : ""}`}
              onClick={() => setSelectedDestination("moon")}
            >
              Moon
            </li>
            <li
              className={`.text-preset-8 blue-300 ${selectedDestination === "mars" ? "active" : ""}`}
              onClick={() => setSelectedDestination("mars")}
            >
              Mars
            </li>
            <li
              className={`.text-preset-8 blue-300 ${selectedDestination === "europa" ? "active" : ""}`}
              onClick={() => setSelectedDestination("europa")}
            >
              Europa
            </li>
            <li
              className={`.text-preset-8 blue-300 ${selectedDestination === "titan" ? "active" : ""}`}
              onClick={() => setSelectedDestination("titan")}
            >
              Titan
            </li>
          </ul>
        </div>
        <h1 className="text-preset-2">{selectedDestination.toUpperCase()}</h1>
        <p className="text-preset-9 blue-300">{destinationData.description}</p>
        <div className="design-line"></div>
        <div className="stats-holder">
          <div className="stats-distance">
            <p className="stats-title text-preset-7 blue-300">AVG. DISTANCE</p>
            <p className="stats-info text-preset-6">
              {destinationData.distance}
            </p>
          </div>
          <div className="stats-travel">
            <p className="stats-title text-preset-7 blue-300">
              EST. TRAVEL TIME
            </p>
            <p className="stats-info text-preset-6">{destinationData.travel}</p>
          </div>
        </div>
      </div>
    </>
  );
}
