import React, { createContext, useState } from 'react';

const UserContext = createContext({
  feedbackList: [],
  minor: 0,
  name: '',
  age: 0,
  note: '',
  setNote: () => { },
  setAge: () => { },
  setName: () => { },
  setMinor: () => { },
  setFeedbackList: () => { },
  handleAdd: () => { },
  handleDelete: () => { },
});

const UserProvider = ({ children }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [minor, setMinor] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [note, setNote] = useState('');

  const handleAdd = () => {
    if (name && age && age > 0) {
      const newFeedback = {
        id: feedbackList.length ? feedbackList[feedbackList.length - 1].id + 1 : 0,
        name,
        age,
        note,
      };
      if (age < 17) setMinor(prev => prev + 1);
      setFeedbackList([...feedbackList, newFeedback]);
      setName('');
      setAge('');
      setNote('');
    }
  };

  const handleDelete = (id) => {
    setFeedbackList(feedbackList.filter((item) => {
      if (item.id === id && item.age < 17) setMinor(prev => prev - 1);
      return item.id !== id;
    }));
  };


  return (
    <UserContext.Provider value={{ handleAdd, handleDelete, age, setAge, feedbackList, setFeedbackList, name, setName, note, setNote, minor, setMinor }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
