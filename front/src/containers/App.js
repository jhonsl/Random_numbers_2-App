import React, { Component } from 'react'
import From from '../components/From'
import FromRange from '../components/FromRange'
import History from '../components/History'
import Result from '../components/Result'

class App extends Component {// component stateful
  render() {
    return (
      <div className='container'>
        <h1 className='mt-3' style={{textAlign: 'center'}}>Lista Random</h1>

        <div className='m-4 p-4 card border-dark'>
          <h3>-Ordenar aleatoriamente una lista</h3>
          <div style={{textAlign: 'center'}}>
            <From />
          </div>
        </div>
        
        <div className='m-4 p-4 card border-dark'>
          <h3>-Ordenar aleatoriamente en un rango</h3>
          <div style={{textAlign: 'center'}}>
            <FromRange />
          </div>
        </div>

        <div style={{textAlign: 'center'}} className='m-4 p-4 card border-dark'>
          <h3>Resultado</h3>
          <Result/>
        </div>

        <div style={{textAlign: 'center'}} className='m-4 p-4 card border-dark'>
          <History />
        </div>
      </div>
    )
  }
}

export default App


