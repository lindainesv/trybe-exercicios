import React, { useState } from "react";

function Form() {
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [location, setLocation] = useState('');
const [module, setModule] = useState('');

  return (
    //codigo
    <div>
      <label htmlFor='name'>
  Nome completo:
      <input
      type='text'
      id='name'
      value={name}
      onChange={({target})=> setName(target.value)}
      />

  Idade:
      <input
      type='number'
      id='age'
      value={age}
      onChange={({target})=> setAge(target.value)}
      />

  Cidade:
      <input
      type='text'
      id='city'
      value={location}
      onChange={({target})=> setLocation(target.value)}
      />

  Modulo que está estudando:

      <input
      type='radio'
      onChange={({target}) => setModule(target.value)}
      checked={module === 'Fundamentos'}
      value="Fundamentos"
      />Fundamentos

      <input
      type='radio'
      name='radio'
      onChange={({target}) => setModule(target.value)}
      checked={module === 'Front-end'}
      value="Front-end"
      />Front-end

      <input
      type='radio'
      onChange={({target}) => setModule(target.value)}
      checked={module === 'Back-end'}
      value="Back-end"
      />Back-end

        <input
      type='radio'
      onChange={({target}) => setModule(target.value)}
      checked={module === 'Ciência da Computação'}
      value='Ciência da Computação'
      />Ciência da Computação

      </label>

        <button
        type='submit'
        onClick={(event) => {
          event.preventDefault();
          console.log('Click!');
          }}
        >
          Enviar
        </button>
    </div>
  );
};
 export default Form;