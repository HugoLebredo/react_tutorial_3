import react from "react";

const Note = ({ note }) => (
  <li>
    <p>{`💬 ${note.content} ⏰ ${note.date}`}</p>
  </li>
);

export default Note;