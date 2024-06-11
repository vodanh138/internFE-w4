import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const InputName = () => {
  const {NameInput} = useContext(UserContext);
  return (
    <>
      <label className="p_name">Name:</label><br />
      <input
      ref={NameInput}
        type="text"
        name="add_name"
        className="add_name"
        id="add_name"
      /><br />
    </>
  );
}

export default InputName;
