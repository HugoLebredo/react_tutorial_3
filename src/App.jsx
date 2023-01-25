import { useState } from "react";
import Note from "./Note.jsx";
import "./App.css";

export default function App() {
  const [arrayNotes, setArrayNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteToAdd = {
      id: arrayNotes.length + 1,
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5
    };

    setArrayNotes([...arrayNotes, noteToAdd]);
    setNewNote("");
  };

  return (
    <div className="App">
      <h1>Primera petición utilizando Fetch()</h1>
      <ol className="NotesList">
        {arrayNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newNote} onChange={handleChange}></input>
        <button>Add note</button>
      </form>
    </div>
  );
}

