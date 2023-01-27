import React from 'react';


class App extends React.Component {
constructor () {
  super()
  this.handleButtonOne = this.handleButtonOne.bind(this);
  this.handleButtonTwo = this.handleButtonTwo.bind(this);
  this.handleButtonThree = this.handleButtonThree.bind(this);
  this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
  }
}

  handleButtonOne() {
    const { clicksBtnOne } = this.state;
    this.setState ((estadoAnterior) => ({
      clicksBtnOne: estadoAnterior.clicksBtnOne +1,
    }), () => {
      console.log(`Botão ${this.getButtonColor(clicksBtnOne)}` );
    });
  }
  
   handleButtonTwo() {
    const { clicksBtnTwo } = this.state;
    this.setState ((estadoAnterior) => ({
      clicksBtnTwo: estadoAnterior.clicksBtnTwo +1,
    }), () => {
        console.log(`Botão ${this.getButtonColor(clicksBtnTwo)}`);
    })
  }
  
   handleButtonThree() {
    const { clicksBtnThree } = this.state;
    this.setState ((estadoAnterior) => ({
      clicksBtnThree: estadoAnterior.clicksBtnThree +1,
    }), () => {
        console.log(`Botão ${this.getButtonColor(clicksBtnThree)}`);
    })
  }

  
getButtonColor(num) {
  return num % 2 === 0 ? 'green' : 'white';
}

  render() {
  const {clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;

    return (
      <div>
        <button 
          onClick={ this.handleButtonOne }
          style={ { background: this.getButtonColor(clicksBtnOne) } }
        >
          { `Cliques no botão: ${ clicksBtnOne }` }
        </button>

        <button 
          onClick={ this.handleButtonTwo }
          style={ { background: this.getButtonColor(clicksBtnTwo) } }
        >
          { `Cliques no botão: ${ clicksBtnTwo }` }
        </button>

        <button 
          onClick={ this.handleButtonThree }
          style={ { background: this.getButtonColor(clicksBtnThree) } }
        >
          { `Cliques no botão: ${ clicksBtnThree }` }
          </button>
      </div>
    );
  }
}

export default App;


// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super() 
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     console.log(this)
//     console.log('Clicou')
//   }

//   render() {
//     console.log(this)
//     return <button onClick={this.handleClick}>Meu botão</button>
//   }
// }

// export default App;