import React from 'react';
import { useState } from 'react';
import {  Container,AddContainer, Add, ImageAdd, InputTitle, AddInput, InputWrapper, ButtonWrapper, Button,} from './indexStyle';
import Sidebarr from './Sidebar/sidebar';
import Body from './Body/body';
import { CardData } from './utils/cardData';
const AddImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&usqp=CAU' 

function* GenerateId() {
    let i = CardData.length;
    while (true) {
        yield i++
    }
} 
const id = GenerateId()

const Analitika = () =>  {
    const [open , setOpen] = useState(false)

    const OpenContainer = () => {
        setOpen(true)
    }
    const OnCLose = () => {
        setOpen(false)
    }
        return (
            <Container> 
                 {
                open ? 
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
                    <Button rang = {false} onClick={OnCLose}>Close</Button>
                    <Button rang = {true} >Saqlash</Button>
                    </ButtonWrapper>
                </Add>
            </AddContainer>
            : ''
            }          
                <Sidebarr Add = {OpenContainer} />
                <Body/>
            </Container>
            )
    }
export default Analitika;
