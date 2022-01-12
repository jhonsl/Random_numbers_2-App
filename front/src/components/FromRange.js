import {React, useState} from 'react';
import { connect } from 'react-redux';
import { fetchRandomRange } from '../actions';

const FromRange = (props) => {

    const [state, setstate] = useState({});

    const onSubmitRange = (e) => {
        console.log("holaaa");
        e.preventDefault();
        props.dispatch(fetchRandomRange(state));
    };

    return(
        <form>
            <label>Escoja los valores del rango</label>
            <br />

            <div style={{textAlign: 'center'}} className='my-2 justify-content-center input-group'>
                <span className="input-group-text">Desde</span>
                <input 
                    className='mx-2'  
                    placeholder='ingresa el inicio'  
                    type='number' 
                    onChange={(e) => setstate({...state, numero1: e.target.value})}/>
                <span className="input-group-text">Hasta</span>
                <input 
                    className='mx-2' 
                    placeholder='ingresa el final'  
                    type='number' 
                    onChange={(e) => setstate({...state, numero2: e.target.value})}/>
            </div>

            <button onClick={(e) => onSubmitRange(e)}>
                Enviar
            </button>
            
        </form>
    );
}

const stateMapToPros = state => {
    return {
      loading: state.view.loading
    }
  }
  
  
  export default connect(stateMapToPros)(FromRange)