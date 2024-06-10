import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const InputButton = () => {
  const {handleAdd} = useContext(UserContext);
  return (
    <>
      <button
        type="button"
        name="btn_add"
        className="btn_add"
        id='btn_add'
        onClick={handleAdd}
      >
        Add
      </button><br />
    </>
  );
}

export default InputButton;
