import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  fetch('/api/hello')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  return (
    <h1>HEYYY</h1>
  );
}

export default App;
