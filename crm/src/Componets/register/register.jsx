import React, {useContext, useState } from 'react';
import './css/style.css';
import { Description } from '../resetPasword/styled';
import { RegisterFunction } from '../../context/register';

const Register = ({active, setActive}) => {
  const [name, setName] = useState('');
  const [pasword, setPasword] = useState('');
  const [isActive, setisActive] = useState('');
  const [isView, setisView] = useState(true);
  const [borderInput, setborderInput] = useState(true);
  let res = localStorage.getItem('newpw');
  let [register, dispatch] = useContext(RegisterFunction);
  
  return (
      <div className="Container_Wrapper">
        <div className="container">
          <div className="title-Wrapper">
            <h1 className="title">Login to your account</h1>
            <p className="desc">Enter your details to login.</p>
          </div>
          <div className="inputs">
            <div className="input_one">
              <p className="input_one_description">Email Adress * {isActive}</p>
              <input
                style={{ border: borderInput ? '2px solid gray' : '2px solid red' }}
                onChange={(e) => setName(e.target.value)}
                className="input_one_1"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="input_two">
              <p className="input_two_description">Password Adress *</p>
              <input
                style={{ border: borderInput ? '2px solid gray' : '2px solid red' }}
                onChange={(e) => setPasword(e.target.value)}
                className="input_one_2"
                type={isView ? 'password' : 'number'}
                placeholder="**********"
              />
              <button onClick={() => dispatch({type: 'view', payload: {isView, setisView}})} className="ButtonPasword">
                {isView ? 'Parolni korish' : 'Parolni berkitish'}
              </button>
            </div>
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => dispatch({type: 'onData', payload: {name, pasword, res, setActive, setisActive, setborderInput}})} className="registerButton">Login</button>
          </div>
            <Description onClick={() => setActive('reset')}>Parol esdan chiqdimi?</Description>
        </div>
      </div>
  );
};

export default Register;
