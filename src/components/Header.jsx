import NavBar from "./NavBar.jsx";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo-design">
          <img src="src\assets\shared\logo.svg" alt="Space Tourism Logo" />
          <div className="design-line"></div>
        </div>
        <NavBar />
      </header>
    </>
  );
}
