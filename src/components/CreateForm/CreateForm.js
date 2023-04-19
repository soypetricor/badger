import React, { useState } from 'react';
import './InputStyle.css'

function Form() {
  const [valor, setValor] = useState('');

  const handleChange = (event) => {
    setValor(event.target.value);
  }

  return (
    <div>
      <label htmlFor="mi-input"></label>
      <input 
        id="mi-input"
        type="text"
        value={valor}
        onChange={handleChange}
        placeholder='Nombre del Badge'
        className='input-style'
        />
    </div>
  );
  }
  
  export default Form;