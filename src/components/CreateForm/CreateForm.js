import React, { useState } from 'react';
import './Style.css'
import { useNavigate } from 'react-router';
import { ReactDOM } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const defaultImage = 'https://i.postimg.cc/BbsRxMFz/Dise-o-sin-t-tulo-12.png'

const initialForm ={
  name: '',
  specialty: '',
  platform: '',
  generation: '',
  criteria: '',
  knowledge: '',
  skills: '',
}
function Form() {
  const [form, setForm] = useState(initialForm);
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  let navigate = useNavigate()

  function openModal() {
    if(showModal === true){
      
    }
  }

  const handleChange = (e) => {
    for (const key in form) {
      if (errorInputs[key] == true) {
        errorInputs[key] = false;
      }
    }
    setForm({
      ...form,
      [e.target.id]:e.target.value,
      error: errorInputs,
    })
    console.log(form, image)
  }

  const errorInputs = {};
  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage({
        url: URL.createObjectURL(file),
        base64: reader.result,
      });
      console.log(image)
    };
  };
  const handleSave = (e) => {
    e.preventDefault();
    const addImageButton = document.getElementById('add-image-button')
    const hasError = Object.values(form).some((value) => String(value).trim() === '');
    if (hasError) {
      for (const key in form) {
        if (typeof form[key] === 'string' && form[key].trim() === '') {
          errorInputs[key] = true;
        }
        if (!image) {
          addImageButton.classList.add('image-error');
        }
      }
      alert('Por favor, rellena todos los campos')
      setForm({
        ...form,
        error: errorInputs,
      });
    } else {
      // acá guardo
      console.log('Datos guardados');
      setShowModal(true);
    }
    console.log(errorInputs)
  }

  const handleCancel = () => {
    setShowSecondModal(true);
  }

  return (
    <>
      {showModal && (
    <Modal isOpen={showModal} className='modal'>
      <h1 className='modal-title' >Este es tu Badge</h1>
      <div className='modal-card modal-container'>
      <div align='left'>
      <img src={image.url} alt='preview' className='modal-image' />
      </div>
      <div className="divider-style"></div>
      <div className='modal-form'>
        <div className='container-form'>
        <p className='badger-name'>{form.name}</p>
        <p className='badger-gen'>{form.generation}</p>
        <p className='badger-platform'>{form.platform}</p>
        </div>
        <div className='info-container'>
        <div className='left-info'>
        <p className='badger-subtitle'>Especialidad:</p>
        <p className='badger-text'>{form.specialty}</p>
        <p className='badger-subtitle'>Conocimientos:</p>
        <p className='badger-text'>{form.knowledge}</p>
        </div>
        <div className='rigth-info'>
        <p className='badger-subtitle'>Habilidades:</p>
        <p className='badger-text'>{form.skills}</p>
        <p className='badger-subtitle'>Criterios:</p>
        <p className='badger-text'>{form.criteria}</p>
        </div>
        </div>
      </div>
      </div>
      <div align='center'>
      <button onClick={() => navigate('/')} className='modal-button' align='left'>Volver al inicio</button>
      <button onClick={() => navigate('/sign-badge')} className='modal-button' align='center'>Firmar</button>
      <button onClick={() => setShowModal(false)} className='modal-button' align='right'>Editar</button>
      </div>
    </Modal>
  )}
  {showSecondModal && (
  <Modal isOpen={showSecondModal} className='modal-cancel'>
    <div align='center'>
    <h1>¡Cuidado!</h1>
    <p>Estás por cancelar la creación de este Badge, no podrás recuperar la información que has guardado aquí</p>
    <p>¿Aún quieres cancelar?</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
  <button onClick={() => navigate('/')} className='modal-button-cancel'>Sí, cancelar</button>
  <button onClick={() => setShowSecondModal(false)} className='modal-button'>Continuar creando</button>
</div>
  </Modal>
)}
    <div align='center'>
    <h1 className='name-style'>Crea tu Badge</h1>
    </div>
    <div className='image-container' align='center'>
    <img src={image?.url ?? defaultImage} alt='preview' className='image-preview' />
    <label htmlFor='image' id='add-image-button' className='custom-file-upload'>
    <i className='fa fa-cloud-upload'></i> Añadir imagen
    </label>
    <input 
      id='image'
      type='file'
      accept='image/*'
      onChange={handleImageChange}
      style={{ display: 'none' }}
    />
    </div>
    <div align='center' className='container'>
      <input 
        id='name'
        type='text'
        value={form.name}
        onChange={handleChange}
        placeholder='Nombre del Badge'
        className={`input-style ${form.error?.name && 'error'}`}
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='specialty'
        type='text'
        value={form.specialty}
        onChange={handleChange}
        placeholder='Especialidad'
        className={`input-style ${form.error?.specialty && 'error'}`}
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='platform'
        type='text'
        value={form.platform}
        onChange={handleChange}
        placeholder='Plataforma/ evento'
        className={`input-style ${form.error?.platform && 'error'}`}
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='generation'
        type='text'
        value={form.generation}
        onChange={handleChange}
        placeholder='Generación/ versión'
        className={`input-style ${form.error?.generation && 'error'}`}
        />
    </div>
    <div align='center' className='container'>
      <textarea 
        id='criteria'
        type='text'
        value={form.criteria}
        onChange={handleChange}
        style={{
          height: 100,
        }}
        placeholder='Criterios evaluativos'
        className={`input-style ${form.error?.criteria && 'error'}`}
        />
    </div>
    <div align='center' className='container'>
      <textarea 
        id='knowledge'
        type='text'
        value={form.knowledge}
        onChange={handleChange}
        style={{
          height: 100,
        }}
        placeholder='Conocimientos (separados por comas)'
        className={`input-style ${form.error?.knowledge && 'error'}`}
        />
    </div>
    <div align='center' className='container'>
      <textarea 
        id='skills'
        type='text'
        value={form.skills}
        onChange={handleChange}
        style={{
          height: 100,
        }}
        placeholder='Habilidades (separadas por comas)'
        className={`input-style ${form.error?.skills && 'error'}`}
        />
    </div>
    <div align='center' className='container'>
    <button onClick={handleCancel} className='button-cancel'>Cancelar</button>
    <button onClick={handleSave} className='button-save'>Guardar</button>
    </div>
    </>
  );
  }
  
  export default Form;