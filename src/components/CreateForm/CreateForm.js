import React, { useState } from 'react';
import './Style.css'
import { useNavigate } from 'react-router';
import { ReactDOM } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

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

  let navigate = useNavigate()

  function openModal() {
    if(showModal === true){
      
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]:e.target.value,
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
    const hasError = Object.values(form).some((value) => value.trim() === "");
    if (hasError) {
      for (const key in form) {
        if (typeof form[key] === "string" && form[key].trim() === "") {
          errorInputs[key] = true;
        }
      }
      alert('Por favor, rellena todos los campos')
      setForm({
        ...form,
        error: errorInputs,
      });
    } else {
      // acá guardo
      console.log("Datos guardados");
      setShowModal(true);
    }
    console.log(errorInputs)
  }

  const handleCancel = () => {
    navigate('/')
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
        <p>{form.specialty}</p>
        <p className='badger-subtitle'>Conocimientos:</p>
        <p>{form.knowledge}</p>
        </div>
        <div className='rigth-info'>
        <p className='badger-subtitle'>Habilidades:</p>
        <p>{form.skills}</p>
        <p className='badger-subtitle'>Criterios:</p>
        <p>{form.criteria}</p>
        </div>
        </div>
      </div>
      </div>
      <button onClick={() => setShowModal(false)} className='modal-button'>Cerrar</button>
    </Modal>
  )}
    <div align='center'>
    <h1 className='name-style'>Crea tu Badge</h1>
    </div>
    <div align='center' className='container'>
    {image && (
      <img src={image.url} alt='preview' className='image-preview' />
    )}
    <label htmlFor='image' className='custom-file-upload'>
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
        className={`input-style ${form.error?.name && "error"}`}
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='specialty'
        type='text'
        value={form.specialty}
        onChange={handleChange}
        placeholder='Especialidad'
        className={`input-style ${form.error?.specialty && "error"}`}
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='platform'
        type='text'
        value={form.platform}
        onChange={handleChange}
        placeholder='Plataforma/ evento'
        className={`input-style ${form.error?.platform && "error"}`}
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='generation'
        type='text'
        value={form.generation}
        onChange={handleChange}
        placeholder='Generación/ versión'
        className={`input-style ${form.error?.generation && "error"}`}
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='criteria'
        type='text'
        value={form.criteria}
        onChange={handleChange}
        placeholder='Criterios evaluativos'
        className={`input-style ${form.error?.criteria && "error"}`}
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='knowledge'
        type='text'
        value={form.knowledge}
        onChange={handleChange}
        placeholder='Conocimientos'
        className={`input-style ${form.error?.knowledge && "error"}`}
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='skills'
        type='text'
        value={form.skills}
        onChange={handleChange}
        placeholder='Habilidades'
        className={`input-style ${form.error?.skills && "error"}`}
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