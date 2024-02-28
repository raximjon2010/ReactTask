import React from 'react';
import { useState } from 'react';
import {Email, Icon, Main, Menu, MenuItem, MenuTitle, Name, Profile } from './sidebarStyle';
import { NavLists } from '../utils/sidebar';
const logo = 'https://secure.gravatar.com/avatar/186cfc27d134c8301c6597b83ff57a02/?s=64&d=https://images.binaryfortress.com/General/UnknownUser1024.png';
// icon
import Frame_2 from '../icon/Frame_2.svg'
import Frame from '../icon/Frame.svg'
import Guruhlar from '../icon/Gruhlar.svg'
import Kurslar from '../icon/Kurslar.svg'
import Moliya from '../icon/Moliya.svg'
import HR from '../icon/RD.svg'
import Talaba from '../icon/Talaba.svg'
import Vector from '../icon/Vector.svg'
import Arrow from '../icon/Arrow.svg'

const Sidebar = (props) => {
    const [aktivee, setActive] = useState([])
    const [active, setAktive] = useState([])
    const [active_2, setAktive_2] = useState([])
    const [active_3, setAktive_3] = useState([])
    const [active_4, setAktive_4] = useState([])
    const [active_5, setAktive_5] = useState([])
    const [active_6, setAktive_6] = useState([])
    const [active_7, setAktive_7] = useState([])
    const [qayta, setQayta] = useState(false)
    const [qayta_2, setQayta_2] = useState(false)
    const [qayta_3, setQayta_3] = useState(false)
    const [qayta_4, setQayta_4] = useState(false)
    const [qayta_5, setQayta_5] = useState(false)
    const [qayta_6, setQayta_6] = useState(false)
    const [qayta_7, setQayta_7] = useState(false)
    const OpenData_1 = (id) => {
      setQayta(!qayta)
      NavLists.map((value) => {
        if (value.id === id) {
          setAktive(value.data)
        }
      })
    }

    const OpenData_2 = (id) => {
      setQayta_2(!qayta_2)
      NavLists.map((value) => {
        if (value.id === id) {
          setAktive_2(value.data)
        }
      })
    }

    const OpenData_3 = (id) => {
      setQayta_3(!qayta_3)
      NavLists.map((value) => {
        if (value.id === id) {
          setAktive_3(value.data)
        }
      })
    }

    const OpenData_4 = (id) => {
      setQayta_4(!qayta_4)
      NavLists.map((value) => {
        if (value.id === id) {
          setAktive_4(value.data)
        }
      })
    }

    const OpenData_5 = (id) => {
      setQayta_5(!qayta_5)
      NavLists.map((value) => {
        if (value.id === id) {
          setAktive_5(value.data)
        }
      })
    }

    const OpenData_6 = (id) => {
      setQayta_6(!qayta_6)
      NavLists.map((value) => {
        if (value.id === id) {
          setAktive_6(value.data)
        }
      })
    }

    const OpenData_7 = (id) => {
      setQayta_7(!qayta_7)
      NavLists.map((value) => {
        if (value.id === id) {
          setAktive_7(value.data)
        }
      })
    }
    const onActive = (name) => {
      if (aktivee.includes(name)) {
        let aktive = aktivee.filter((val) => val !== name)
        setActive(aktive)
      }
      else{
        const aktive = [...aktivee, name]
        setActive(aktive)
      }
    }
    const isActive = (title) => {
      return aktivee.includes(title)
    }
    return(
      <Main>
        <MenuTitle>Webbrain.crm</MenuTitle>
        <Profile>
          <Profile.UserImage src = {logo}/>
          <div>
          <Name>Rahimjon Xujaqulov</Name>
          <Email>r.xujaqulov@gmail.com</Email>
          </div>
        </Profile>
        <Menu>
                <div  onClick={() => OpenData_1(1)}>
                <MenuItem  onClick={() => onActive('Anlitika')}>
                   <Icon  src= {Frame} alt='eror'/> 
                    Anlitika
                   <Icon.Arrow  active = {isActive('Anlitika')} src={Arrow} />
                   </MenuItem>
                </div>
                <div  onClick={() => OpenData_1(2)}>
                <MenuItem onClick={() => onActive('Buyurtma')}>
                   <Icon  src= {Frame_2} alt='eror'/> 
                   Buyurtma
                   <Icon.Arrow  active = {isActive('Buyurtma')} src={Arrow} />
                   </MenuItem>
                 {qayta?active : ''}
                </div>
                <div  onClick={() => OpenData_2(3)}>
                <MenuItem onClick={() => onActive('Moliya')}>
                   <Icon  src= {Moliya} alt='eror'/> 
                   Moliya
                   <Icon.Arrow  active = {isActive('Moliya')} src={Arrow} />
                   </MenuItem>
                 {qayta_2?active_2 : ''}
                </div>
                <div  onClick={() => OpenData_3(4)}>
                <MenuItem  onClick={() => onActive('Talaba')}>
                   <Icon  src= {Talaba} alt='eror'/> 
                   Talaba
                   <Icon.Arrow  active = {isActive('Talaba')} src={Arrow} />
                   </MenuItem>
                 {qayta_3?active_3 : ''}
                </div>
                <div  onClick={() => OpenData_4(5)}>
                <MenuItem  onClick={() => onActive('Guruhlar')}>
                   <Icon  src= {Guruhlar} alt='eror'/> 
                   Guruhlar
                   <Icon.Arrow  active = {isActive('Guruhlar')} src={Arrow} />
                   </MenuItem>
                 {qayta_4?active_4 : ''}
                </div>

                <div  onClick={() => OpenData_5(6)}>
                <MenuItem  onClick={() => onActive('Kurslar')}>
                   <Icon  src= {Kurslar} alt='eror'/> 
                   Kurslar
                   <Icon.Arrow  active = {isActive('Kurslar')} src={Arrow} />
                   </MenuItem>
                 {qayta_5?active_5 : ''}
                </div>
                <div  onClick={() => OpenData_6(7)}>
                <MenuItem  onClick={() => onActive('HR')}>
                   <Icon  src= {HR} alt='eror'/> 
                   HR
                   <Icon.Arrow  active = {isActive('HR')} src={Arrow} />
                   </MenuItem>
                 {qayta_6?active_6 : ''}
                </div>
                <div  onClick={() => OpenData_7(8)}>
                <MenuItem  onClick={() => onActive('Sozlamalar')}>
                   <Icon  src= {Vector} alt='eror'/> 
                   Sozlamalar
                   <Icon.Arrow  active = {isActive('Sozlamalar')} src={Arrow} />
                   </MenuItem>
                 {qayta_7?active_7 : ''}
                </div>
          <MenuItem last>Chiqish</MenuItem>
          </Menu>
      </Main>
    );
     }
export default Sidebar;