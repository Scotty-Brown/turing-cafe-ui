import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [reservations, setReservations] = useState([])

  function getReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(res => {
        if(!res.ok) {
          throw new Error('Network response not ok, try again.')
        }
        return res.json()
      })
  }

  useEffect(() => {
    getReservations()
    .then(data => setReservations(data))
  }, [])

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form reservations={reservations} setReservations={setReservations} />
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations} />
      </div>
    </div>
  );
}

export default App; 