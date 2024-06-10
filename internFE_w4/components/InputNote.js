import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const InputNote = () => {
  const {note, setNote} = useContext(UserContext);
  return (
    <>
      <label className="p_note">Noted:</label><br />
      <textarea
        rows="4"
        cols="50"
        name="add_note"
        className="add_note"
        id="add_note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      /><br />
    </>
  );
}

export default InputNote;
