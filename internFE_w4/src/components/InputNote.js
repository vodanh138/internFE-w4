import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const InputNote = () => {
  const {NoteInput} = useContext(UserContext);
  return (
    <>
      <label className="p_note">Noted:</label><br />
      <textarea
      ref={NoteInput}
        rows="4"
        cols="50"
        name="add_note"
        className="add_note"
        id="add_note"
      /><br />
    </>
  );
}

export default InputNote;
