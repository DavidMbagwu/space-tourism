import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

const PageContext = React.createContext();
function App() {
  const [currentPage, setCurrentPage] = React.useState("home");

  const pageContextValue = {
    currentPage,
    setCurrentPage,
    handlePageChange: (page) => {
      setCurrentPage(page);
      console.log(`Current page changed to: ${page}`);
    },
  };

  return (
    <PageContext.Provider value={pageContextValue}>
      <Header />
      <Main />
    </PageContext.Provider>
  );
}

export default App;
export { PageContext };
