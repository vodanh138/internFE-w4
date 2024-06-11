import React, { createContext, useRef, useState } from 'react';

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
  const NameInput = useRef();
  const AgeInput = useRef();
  const NoteInput = useRef();

  const handleAdd = () => {
    const name = AgeInput.current?.value;
    const age = AgeInput.current?.value;
    const note = AgeInput.current?.value;
    if (name && age && age > 0) {
      const newFeedback = {
        id: feedbackList.length ? feedbackList[feedbackList.length - 1].id + 1 : 0,
        name,
        age,
        note,
      };
      if (age < 17) setMinor(prev => prev + 1);
      setFeedbackList([...feedbackList, newFeedback]);
      NameInput.current.value = '';
      AgeInput.current.value = '';
      NoteInput.current.value = '';
    }
  };

  const handleDelete = (id) => {
    setFeedbackList(feedbackList.filter((item) => {
      if (item.id === id && item.age < 17) setMinor(prev => prev - 1);
      return item.id !== id;
    }));
  };


  return (
    <UserContext.Provider value={{
      handleAdd, handleDelete, feedbackList,
      setFeedbackList,minor, setMinor,AgeInput,NameInput,NoteInput
    }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
