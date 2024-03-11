import React, { useContext } from 'react';
import {  Container,AddContainer, Add, ImageAdd, InputTitle, AddInput, InputWrapper, ButtonWrapper, Button,} from './indexStyle';
import Sidebarr from './Sidebar/sidebar';
import Body from './Body/body';
import SideBarProvider from '../../context/Analitika/Sidebar';
const AddImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&usqp=CAU'; 
import { AnalitikaFunction } from '../../context/Analitika';

const Analitika = () =>  {

    const [Active, dispatch] = useContext(AnalitikaFunction)
        return (
            <Container> 
                 {
                Active ? 
                <AddContainer>
                <Add>
                    <ImageAdd src = {AddImage}/>
                    <InputWrapper>
                    <InputTitle>Nomi</InputTitle>
                    <AddInput type='tex' placeholder='Nomi'/>
                    </InputWrapper>
                    <InputWrapper>
                    <InputTitle>Icon Manzili</InputTitle>
                    <AddInput type='text' placeholder='Icon Manzili'/>
                    </InputWrapper>

                    <InputWrapper>
                    <InputTitle>Profile manzili</InputTitle>
                    <AddInput type='tex' placeholder='Profile manzili'/>
                    </InputWrapper>

                    <ButtonWrapper>
                    <Button rang = {false} onClick={() => dispatch({type: 'close'})}>Close</Button>
                    <Button rang = {true}>Saqlash</Button>
                    </ButtonWrapper>
                </Add>
            </AddContainer>
            : ''
            }     
            <SideBarProvider>
                <Sidebarr/>
            </SideBarProvider>     
                <Body/>
            </Container>
            )
    }
export default Analitika;
