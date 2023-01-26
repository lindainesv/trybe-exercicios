import React from 'react';

class App extends React.Component {

constructor () {
  super()
  this.handleButtonOne = this.handleButtonOne.bind(this);
  this.handleButtonTwo = this.handleButtonTwo.bind(this);
  this.handleButtonThree = this.handleButtonThree.bind(this);
}

  handleButtonOne() {
    console.log(this);
    console.log('Clicou no botão 1!');
  }
  
   handleButtonTwo() {
    console.log(this);
    console.log('Clicou no botão 2!');
  }
  
   handleButtonThree() {
    console.log(this);
    console.log('Clicou no botão 3!');
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleButtonOne }>Botão 1</button>
        <button onClick={ this.handleButtonTwo }>Botão 2</button>
        <button onClick={ this.handleButtonThree }>Botão 3</button>
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