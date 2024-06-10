import React, { useState } from 'react';
import "./App.css";


const RenderFeedBack = ({ element, onDelete }) => {
  return (
    <div className='item_con'>
      <p>Name: {element.name}</p>
      <p>Age: {element.age}</p>
      <p>Noted: {element.note}</p>
      {/* <button className='delete-btn' onClick={() => onDelete(element.id)}>
        <span style={{ color: 'white' }}>&#10006;</span>
      </button> */}

      <button className='delete-btn1' onClick={() => onDelete(element.id)}>
        <img src = "bin.jpg" alt="Delete"></img>
      </button>
    </div>
  );
}

const Render = ({ feedbackList, onDelete }) => {
  let renderedFeedback = [];
  feedbackList.forEach(element => {
    renderedFeedback.push(
      <RenderFeedBack key={element.id} element={element} onDelete={onDelete} />
    );
  });
  return (
    <div className='feedback_con'>
      {renderedFeedback}
    </div>
  );
}

const InputAge = ({ age, setAge }) => {
  return (
    <>
      <label className="p_age">Age:</label><br></br>
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

const InputNote = ({ note, setNote }) => {
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

const InputName = ({ name, setName }) => {
  return (
    <>
      <label className="p_name">Name:</label><br></br>
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

const InputButton = ({ handleAdd }) => {
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
      </button><br></br>
    </>
  );
}


function App() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [minor, setminor] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [note, setNote] = useState('');

  const handleAdd = () => {
    if (name && age && age > 0) {
      const newFeedback = {
        id: feedbackList.length ? feedbackList[feedbackList.length - 1].id + 1 : 0,
        name,
        age,
        note,
      };
      if (age < 17)
        setminor(prev => prev + 1);
      setFeedbackList([...feedbackList, newFeedback]);
      setName('');
      setAge('');
      setNote('');
    }
  };

  const handleDelete = (id) => {
    setFeedbackList(feedbackList.filter((item) => {
      if (item.id === id && item.age < 17)
        setminor(prev => prev - 1);
      return item.id !== id
    }));
  };
  const Statistical = () => {
    return (
      <>
        <div className='statistic'>Thống Kê
          <div className='data'>
            Tổng số FeedBack: {feedbackList.length}<br></br>
            Số FeedBack của member {`>`} 16 tuổi:{feedbackList.length - minor} <br></br>
            Số FeedBack của member {`<`} 17 tuổi:{minor}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='home'>
        <div>
          <InputName name={name} setName={setName} />
          <InputAge age={age} setAge={setAge} />
          <InputNote note={note} setNote={setNote} />
        </div>
        <Statistical />
      </div>
      <InputButton handleAdd={handleAdd} />
      <Render feedbackList={feedbackList} onDelete={handleDelete} />
    </>
  );
}

export default App;
