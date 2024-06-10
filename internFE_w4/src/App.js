import React from 'react';
import "./App.css";
import InputName from './components/InputName';
import InputAge from './components/InputAge';
import InputNote from './components/InputNote';
import InputButton from './components/InputButton';
import Render from './components/Render';
import Statistical from './components/Statistical';
import {UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className='home'>
        <div>
          <InputName/>
          <InputAge/>
          <InputNote/>
          <InputButton/>
        </div>
        <Statistical/>
      </div>
      <Render/>
    </UserProvider>
  );
}

export default App;
