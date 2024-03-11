import React, { useContext } from 'react';
import { useState } from 'react';
import {ArrowImg, Email, Icon, Main, Menu, MenuItem, MenuTitle, Name, OpenText, Profile } from './sidebarStyle';
const logo = 'https://secure.gravatar.com/avatar/186cfc27d134c8301c6597b83ff57a02/?s=64&d=https://images.binaryfortress.com/General/UnknownUser1024.png';
import { SidebarFunction } from '../../../context/Analitika/Sidebar';
import { AnalitikaFunction } from '../../../context/Analitika';
import Arrow from '../icon/Arrow.svg'

const Sidebar = ({open, setOpen}) => {
    const [NavList,setNavlist] = useContext(SidebarFunction);
    const [Active, dispatch] = useContext(AnalitikaFunction)
    const [isActiv, SetisActiv] = useState(0);
    const [active, setaActive] = useState(null);
    const onActive = (name, id) => {
      SetisActiv(id)
      isActiv !== id ? setaActive(!active) : setaActive(!active);
      if (NavList.includes(name)) {
        let aktive = NavList.filter((val) => val !== name)
        setNavlist(aktive)
      }
      else{
        const aktive = [...NavList, name]
        setNavlist(aktive)
      }
    }
    const isActive = (title) => {
      return NavList.includes(title)
    }
    return (
      <Main>
        <MenuTitle onClick={() => dispatch({type: 'open'})}>Webbrain.crm</MenuTitle>
        <Profile>
          <Profile.UserImage src = {logo}/>
          <div>
          <Name>Rahimjon Xujaqulov</Name>
          <Email>r.xujaqulov@gmail.com</Email>
          </div>
        </Profile>
        <Menu>
          {
            NavList.map(value => {
              return (
                <div key={value.id}>
                <MenuItem  onClick={() => onActive(value.title, value.id)}>
                     <Icon  src= {value.iconClass} alt='eror'/> 
                      <p>{value.title}</p>
                     <ArrowImg src = {Arrow}  active = {isActive(value.title)}/>
                     </MenuItem>
                     {
                      active ? isActiv == value.id ? <div><OpenText>{value?.data[0]}</OpenText> <OpenText>{value?.data[1]}</OpenText> <OpenText>{value?.data[2]}</OpenText></div>: '' : ''
                     }
                      </div>
                     )
                    })
           }
          <MenuItem last = 'true'>Chiqish</MenuItem>
          </Menu>
      </Main>
    );
    }
export default Sidebar;