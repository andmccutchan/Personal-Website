import React from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container flex flex-col mx-auto min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
