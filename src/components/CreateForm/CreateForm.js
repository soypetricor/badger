import React, { useState } from 'react';
import './Style.css'
import { useNavigate } from 'react-router';

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
  let navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]:e.target.value,
    })
    console.log(form, image)
  }

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
  const handleSave = () => {
    // Aquí va el código para guardar
    console.log(form, image);
  }
  const handleCancel = () => {
    navigate('/')
  }

  return (
    <>
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
        className='input-style'
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='specialty'
        type='text'
        value={form.specialty}
        onChange={handleChange}
        placeholder='Especialidad'
        className='input-style'
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='platform'
        type='text'
        value={form.platform}
        onChange={handleChange}
        placeholder='Plataforma/ evento'
        className='input-style'
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='generation'
        type='text'
        value={form.generation}
        onChange={handleChange}
        placeholder='Generación/ versión'
        className='input-style'
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='criteria'
        type='text'
        value={form.criteria}
        onChange={handleChange}
        placeholder='Criterios evaluativos'
        className='input-style'
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='knowledge'
        type='text'
        value={form.knowledge}
        onChange={handleChange}
        placeholder='Conocimientos'
        className='input-style'
        />
    </div>
    <div align='center' className='container'>
      <input 
        id='skills'
        type='text'
        value={form.skills}
        onChange={handleChange}
        placeholder='Habilidades'
        className='input-style'
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