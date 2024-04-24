import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import contentTem from "./content-tem";
import ContentTem from "./content-tem";

function App() {

  return (
    <div className="App">
      <ContentTem title="Hello, World!" text="This is a test application" rating="Star: 2" />
    </div>
  );
}

export default App;
