import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const InputName = () => {
  const {name, setName} = useContext(UserContext);
  return (
    <>
      <label className="p_name">Name:</label><br />
      <input
        type="text"
        name="add_name"
        className="add_name"
        id="add_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
    </>
  );
}

export default InputName;
