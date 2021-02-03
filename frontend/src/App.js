import "./App.css";
import { getNote, createNote } from "./services/NoteService";
import React from "react";
import Textbox from "./Textbox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  getNote = (id) => {
    getNote(id).then((notes) => {
      console.log(notes);
    });
  };

  createNote = (note) => {
    createNote(note).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Note Locker
          <Textbox createNote={this.createNote}></Textbox>
        </header>
      </div>
    );
  }
}

export default App;
