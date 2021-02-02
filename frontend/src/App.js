import "./App.css";
import { getAllNotes, createNote } from "./services/NoteService";
import React from "react";
import Textbox from "./Textbox";

class App extends React.Component {
  getAllNotes = () => {
    getAllNotes().then((notes) => {
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
