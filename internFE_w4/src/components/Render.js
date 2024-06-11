import React from 'react';
import RenderFeedBack from './RenderFeedBack';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Render = () => {
  const {feedbackList, handleDelete} = useContext(UserContext);
  return (
    <div className='feedback_con'>
      {feedbackList.map(element => (
        <RenderFeedBack key={element.id} element={element} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Render;
