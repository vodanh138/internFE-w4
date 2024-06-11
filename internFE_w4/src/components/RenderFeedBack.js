import React from 'react';

const RenderFeedBack = ({ element, onDelete }) => {
  return (
    <div className='item_con'>
      <p>Name: {element.name}</p>
      <p>Age: {element.age}</p>
      <p>Noted: {element.note}</p>
      <button className='delete-btn1' onClick={() => onDelete(element.id)}>
        <img src="bin.jpg" alt="Delete" />
      </button>
    </div>
  );
}

export default RenderFeedBack;
