import React from "react";

export default function HomeContent() {
  React.useEffect(() => {
    document.body.classList.add("home-bg");
    return () => {
      document.body.classList.remove("home-bg");
    };
  }, []);
  return (
    <>
      <div className="content-item left-content">
        <p className="text-preset-5">SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="text-preset-1">SPACE</h1>
        <p className="text-preset-9">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="content-item right-content">
        <div className="explore-button">
          <p className="text-preset-4">EXPLORE</p>
        </div>
      </div>
    </>
  );
}
