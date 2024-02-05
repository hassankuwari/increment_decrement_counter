
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {incNumber, decNumber} from "./ReduxManager/Actions/index"


function App() {
  
  const myState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div className="Container">
      <h1>Increment/Decrement Counter</h1>
      <h4>using React-Redux</h4>

      <div className='quantity'>
        <a className='quantity-minus' title='Decrement' onClick={()=>dispatch(decNumber(2))}><span>-</span></a>
        <input name='quantity' type="text" className='quantity-input' value={myState}/>
        <a className='quantity-plus' title='Increment' onClick={()=>dispatch(incNumber(5))}><span>+</span></a>

      </div>

    </div>
  );
}

export default App;
