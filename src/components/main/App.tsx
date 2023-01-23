import React from 'react';
import './App.css';
import NavigationBar from "../navigationBar/NavigationBar";
import Content from "../Content";

function App() {
  return (
      <div className="App">
          <NavigationBar />
          <Content />
      </div>
  );
}

export default App;
