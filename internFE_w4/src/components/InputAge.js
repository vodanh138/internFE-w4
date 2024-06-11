import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const InputAge = () => {
  const {AgeInput} = useContext(UserContext);
  return (
    <>
      <label className="p_age">Age:</label><br />
      <input
      ref={AgeInput}
        type="number"
        name="add_age"
        className="add_age"
        id="add_age"
      /><br />
    </>
  );
}

export default InputAge;
