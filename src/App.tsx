import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Parent from './Components/Parent';
import Table from './Components/Table';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Parent />} />
          <Route path='/table' element={<Table />} />
          {/* <Route path='/form' element={<Form />} />
          <Route path='/camera' element={<Camera />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
