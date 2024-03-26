import Register from '../componets/register/register';
import ResetPaswrod from '../componets/resetPasword/Reset'
import Analitika from "../componets/Analitika"
import AnalitikaProvider from "../context/Analitika"
import Verfication from '../componets/resetPasword/enterVerficationCode';
import { useState } from 'react';
import NewPassword from '../componets/resetPasword/new Password';
import RegisterProvider from '../context/register';
import ResetProvider from '../context/resetPassword';
import VerficationProvider from '../context/Verfication';

function App() {
  const [active, setActive]= useState(localStorage.getItem('active'));
  localStorage.setItem('active', active === null ? 'register' : active);
  const [number, setNumber] = useState('');
  
  const Components = () => {
    if (active == 'register') {
    return <RegisterProvider><Register active = {active} setActive = {setActive}/></RegisterProvider>
    }
    else if (active == 'verfication'){
     return <VerficationProvider><Verfication number = {number} active = {active} setActive = {setActive}/></VerficationProvider> 
    }
    else if (active == 'analitika') {
      return <AnalitikaProvider><Analitika  active = {active} setActive = {setActive}/></AnalitikaProvider>
    }
    else if (active == 'reset') {
      return <ResetProvider><ResetPaswrod number = {number} setNumber = {setNumber} active = {active} setActive = {setActive}/></ResetProvider>
    }
    else if (active == 'newPw') {
      return <NewPassword setNumber = {setNumber} active = {active} setActive = {setActive}/>
    }
    else {
      return <Register/>
    }
  }
  return (
    <div>
    {
      Components()
    }
    </div>
  )  
}

export default App;