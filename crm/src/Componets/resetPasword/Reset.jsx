import React, { useContext, useState } from 'react';
import { Back, Button, Description, Input, InputLabel, InputWrapper, ResetContainer, ResetWrapper, Select, Title } from './styled';
const back = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21aUq6vIN_8MMIboPcpSi-GkjJHMm4qegdc43DRciEg&s'
import { ResetFunction } from '../../context/resetPassword';

const Reset = ({active, setActive, setNumber, number}) => {
    const [reset, dispatch] = useContext(ResetFunction)
    const [select, setSelect] = useState('UZB');
    const [place, setPlace] = useState('+998 90 000 00 00');
    const [border, setBorder] = useState(false);
     
    const onSelect = (e) => {
        const inputValue = e.target.value;
        setSelect(inputValue);
        switch(inputValue) {
            case 'UZB': setPlace('+998 90 000 00 00'); break;
            case 'ENG': setPlace('+44 20 0000 0000'); break;
            case 'RU': setPlace('+7 (958) 000-00-00'); break;
        }
    }
    return (
        <>
        <Back onClick={() => setActive('register')} src={back} alt="" />
        <ResetContainer>
            <ResetWrapper>
                <Title>Reset Password</Title>
                <Description>Enter your phone number to reset your password.</Description>
                <InputWrapper>
                    <InputLabel>Telefon:</InputLabel>
                    <div style={{display: 'flex'}}>
                        <Select onChange={onSelect} name="">
                            <option value="UZB">UZB</option>
                            <option value="ENG">ENG</option>
                            <option value="RU">RU</option>
                        </Select>
                        <Input onChange={(e) =>{return setNumber(e.target.value), setBorder(false)}}  border = {border} maxLength={'20'} type="number" placeholder={place ? place : ''}/>
                    </div>
                </InputWrapper>
                <Button onClick={() => dispatch({type: 'Next', payload: {number, setBorder, setActive}})}>Reset Password</Button>
            </ResetWrapper>
        </ResetContainer>
</>
    );
}

export default Reset;
