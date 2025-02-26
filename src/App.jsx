import React from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="flex-col">
      <Header />
      <Home />
    </div>
  );
};

export default App;
