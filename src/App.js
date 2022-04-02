import React from 'react'
import TicTacToe from './componets/TicTacToe'
import github from './assets/github.png'

class App extends React.Component {
  render() {return (
    <div className="App">

      <a href="https://github.com/padulav/tic_tac_toe">
          <img  src={github} alt='github source' className='github'/>
      </a>
      

      <TicTacToe/>

    </div>
  );}

}

export default App;
