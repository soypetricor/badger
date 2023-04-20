import React from 'react';
import { useNavigate } from 'react-router';
import './Style.css'

function App() {
    let navigate = useNavigate()
    return (
      <div className="App" align="center">
         <p className='text'> Estamos trabajando para que pronto puedas firmar tus badges</p>
         <button className='button' onClick={() => navigate('/')}>Vuelve al inicio</button>
      </div>
    );
  }
  
  export default App;