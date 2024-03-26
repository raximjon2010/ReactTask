import { useContext, useEffect, useState } from "react";
import { Back, InputWrapper } from "../styled";
import { Button, Description, Input, Title, VerficationContainer, VerficationWrapper } from "./style";
import { VerficationFunction } from "../../../context/Verfication";
const back = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21aUq6vIN_8MMIboPcpSi-GkjJHMm4qegdc43DRciEg&s';


const Verfication = ({number, setActive}) => {
    const [code, setCode] = useState('')
    const [border, setBorder] = useState(null);
    const [seconds, setSeconds] = useState(60);
    const [verfication, dispatch] = useContext(VerficationFunction);
    const Next = () => {
        dispatch({type: 'Next', payload: {code, setBorder, setActive}})
    }
    useEffect(() => {
        if (seconds > 0) {
            const intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
            return () => {
                clearInterval(intervalId);
            }
        };
    }, []);
    const formatTime = (time) => {
        if (time > 0) {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            return `You will receive a code within ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    };
    return (
        <>
        <Back onClick={() => setActive('reset')} src={back} alt="" />
        <VerficationContainer>
            <VerficationWrapper>
                <Title>Enter Verification Code</Title>
                <Description>We’ve sent a code to {number}</Description>
                <InputWrapper>
                    <Input border={border} onChange={(e) => { return setCode(e.target.value), setBorder(null) }} maxLength={'4'} type="text" />
                </InputWrapper>
                <Button onClick={Next}>Reset Password</Button>
                <Description>{formatTime(seconds)}</Description>
                <Description>Experiencing issues receiving the code?</Description>
                <Description onClick={() => setActive('reset')}>Resend Code</Description>
            </VerficationWrapper>
        </VerficationContainer>
        </>
    );
}

export default Verfication;
