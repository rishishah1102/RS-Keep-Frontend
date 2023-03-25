import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Notes from './Pages/Notes';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Signup />} />
          <Route exact path='/notes' element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
