// /src/components/Form.jsx
import React, { Component } from 'react';
import SelectInput from './SelectInput';


class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange({target}) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checkbox : target.value;
    this.setState({
      [name]: value, 
    })
  }

  render() {
    const { name, email, age, anecdote, terms } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className='form'>

        <fieldset>
            <legend>Informações pessoais</legend>

          <label htmlFor='name'>
            Nome: 
            <input
            id='name'
            name='name'
            type='text'
            onChange={ this.handleChange }
            value={name}
            />
            {/* </input> */}
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>

          <SelectInput age={age} handleChange={this.handleChange} />
          </fieldset>

           <fieldset>
           <legend>Texto e arquivos</legend>
          {/* <label htmlFor='age'>
            Idade:
            <select
            id='age'
            name='age'
            defaultValue=''
            onChange={ this.handleChange }
            value={ age }
            >
              <option value=''>Selecione</option>
              <option value='adult'>Maior que 18</option>
              <option value="underage">Menor que 18</option>
              </select>
          </label> */}

          <label htmlFor='anecdote'>
            Anedota:
            <textarea id='anecdote' 
            name='anecdote'
            onChange={ this.handleChange }
            value={ anecdote }
            />
          </label>

          <input type="file" />
          </fieldset>
          
          <label htmlFor="terms">
            <input
            id="terms"
            type="checkbox"
            name="terms"
            onChange={ this.handleChange }
            value={ terms }
            />
            Concordo com os termos e acordos
          </label>

        </form>
        
      </div>
    );
  }
}

export default Form;

