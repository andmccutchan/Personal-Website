import React from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Home />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
