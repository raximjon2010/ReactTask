import { useEffect, useRef, useState } from "react";
import { Back, Button, CheckTitle, Description, Icon, Input, InputLabel, InputWrapper, NewPWContainer, NewPWWrapper, Texts, Title } from "./style";
import eror from '../../../assets/icon/eror.svg';
import trueIcon from '../../../assets/icon/check.svg';
const back = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21aUq6vIN_8MMIboPcpSi-GkjJHMm4qegdc43DRciEg&s'

const NewPassword = ({number, setActive}) => {
    const [pw, setPw] = useState(false)
    const [PWLength, setPwLength] = useState(false)
    const [NumberCheck, setNumberCheck] = useState(false)
    const [StringCheck, setStringCheck] = useState(false)
    const [GOBack, setGOBack] = useState(false)
    const NewPw = useRef('');
    const ConfirmPw = useRef('');
    localStorage.setItem('newpw', NewPw.current.value)

    const Check = () => {
        // Bu yerda useRefda inputni malumotini oldik
        const password = NewPw.current.value;
        const confirim = ConfirmPw.current.value;
        // input tekshirildi
        if (password === confirim ) {
            if (password.length <= 8) setPwLength(true)
            else {setGOBack(true);setPwLength(false)}
            if (!isNaN(password)) setNumberCheck(true); 
            else {setStringCheck(true);setGOBack(true);setNumberCheck(false)}
            setPw(true); 
        } else setPw(false);
    }
        return (
            <>
        <Back onClick={() => setActive('verfication')} src={back} alt="" />
            <NewPWContainer>
            <NewPWWrapper>
                <Title>New Password</Title>
                <Description>Set up a new password to protect your account.</Description>
                <InputWrapper>
                <InputLabel>New Password *</InputLabel>
                <Input ref={NewPw} type="password"  />
                <InputLabel>Confirim Password *</InputLabel>
                <Input ref={ConfirmPw} type="password"  />
                </InputWrapper>
                {
                    pw ?
                    <>
                    <Texts>Weak password. Must contain at least;</Texts>
                    <Texts><Icon src={StringCheck === true ? trueIcon : eror}/> At least 1 uppercase</Texts>
                    <Texts><Icon src={NumberCheck ? eror : trueIcon}/> At least 1 number</Texts>
                    <Texts><Icon src={PWLength ? eror : trueIcon}/> At least 8 characters</Texts>
                    </>
                    : ''
                }
                {GOBack ?<CheckTitle>Parol muvaffaqiyatli almashtirildi.</CheckTitle>:<Button onClick={Check}>Continue</Button>}
            </NewPWWrapper>
        </NewPWContainer>
</>
    );
}

export default NewPassword;
