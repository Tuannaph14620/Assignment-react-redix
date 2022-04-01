import React from 'react';
import './App.css';
import {Routes, Route, Router} from 'react-router-dom'
import WebsiteLayout from './components/layouts/WebsiteLayout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<h1>HomePage</h1>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
