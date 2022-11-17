import react from "react";

const Note = ({ note }) => (
  <li>
    <div>
      <h3> 🗣 {note.title}</h3>
      <p>{`${note.body}`}</p>
    </div>
  </li>
);

export default Note;