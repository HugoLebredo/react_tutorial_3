import { useEffect, useState } from "react";
import Note from "./Note.jsx";
import "./App.css";

export default function App() {
  const [arrayNotes, setArrayNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((promise) => promise.json())
        .then((json) => setArrayNotes(json));
      setLoading(false);
    }, 5000);
  }, []);

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteToAdd = {
      id: arrayNotes.length + 1,
      title: newNote,
      body: newNote,
      important: Math.random() > 0.5
    };

    setArrayNotes([...arrayNotes, noteToAdd]);
    setNewNote("");
  };

  return (
    <div className="App">
      <h1>Renderización condicional</h1>
      {loading ? "Cargando Notas 💤 🥱" : ""}
      <form onSubmit={handleSubmit}>
        <input type="text" value={newNote} onChange={handleChange}></input>
        <button>Add note</button>
      </form>
      <ol className="NotesList">
        {arrayNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ol>
    </div>
  );
}