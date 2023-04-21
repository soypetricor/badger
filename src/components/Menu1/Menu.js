import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Style.css'


function App() {
  let navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    console.log('Is Open', isOpen);
  };

  const handleCreateMenu = () => {
    navigate('/create-badge')
    setIsOpen(!isOpen);
  }

  const handleEditMenu = () => {
    navigate('/edit-profile')
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button className='menu-button' onClick={handleMenuClick}> 
      <img className='icono' src='https://i.postimg.cc/SNQPMcTH/menu.png' alt='Icono de menú' />
      </button>
      <div className={isOpen ? "menu-open" : "menu"}>
        <ul>
          <li className='item' align='center' onClick={() => handleCreateMenu() }>Crear Badge</li>
          <li className='item' align='center' onClick={() => handleEditMenu()}>Editar perfil</li>
        </ul>
        {console.log('is open 2', isOpen)}
      </div>
    </div>
  );
}

export default App;
