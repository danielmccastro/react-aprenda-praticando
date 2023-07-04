import React, { useState } from 'react';
import EntradaDado from './components/EntradaDado';
import SaidaDado from './components/SaidaDado';
import './App.css';

function App() {
  const [username, setUsername] = useState("Maujor")
  return (
    <>
    <EntradaDado username={username} setUsername={setUsername} />
    <SaidaDado username={username} />
    </>
  );
}

export default App;
