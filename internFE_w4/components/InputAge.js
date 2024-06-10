import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const InputAge = () => {
  const {age, setAge} = useContext(UserContext);
  return (
    <>
      <label className="p_age">Age:</label><br />
      <input
        type="number"
        name="add_age"
        className="add_age"
        id="add_age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /><br />
    </>
  );
}

export default InputAge;
