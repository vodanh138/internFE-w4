import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Statistical = () => {
  const {feedbackList, minor} = useContext(UserContext);
  return (
    <div className='statistic'>Thống Kê
      <div className='data'>
        Tổng số FeedBack: {feedbackList.length}<br />
        Số FeedBack của member {`>`} 16 tuổi: {feedbackList.length - minor} <br />
        Số FeedBack của member {`<`} 17 tuổi: {minor}
      </div>
    </div>
  );
};

export default Statistical;
