import React from 'react';
import './App.css';
import NavigationBar from "../navigationBar/NavigationBar";
import Content from "../Content";
import Footer from "../footer/Footer";

function App() {
  return (
      <div className="App">
          <NavigationBar />
          <Content />
          <Footer />
      </div>
  );
}

export default App;
