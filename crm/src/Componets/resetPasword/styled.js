import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ResetContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const ResetWrapper = styled.div`
    width: 430px;
    height: 282px;
    padding: 12px 20px 12px 20px;
    text-decoration: none;
`;

export  const Title = styled.h1`
    font-size: 28px;
    text-align: center;
    font-weight: 500;
    line-height: 38px;
    color: #0A0D14;
`;

export const Description = styled.p`
    font-size: 14px;
    text-align: center;
    font-weight: 400;
    line-height: 20px;
    color: #525866;
    cursor: pointer;
`;

export const InputWrapper = styled.div`
    margin: 20px;
`;

export const InputLabel = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #525866;
`;

export const Select = styled.select`
    width: 99px;
    height: 48px;
    font-size: 14px;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid #D0D7DE;
    padding: 6px 12px 6px 12px;
    margin-bottom: 10px;
    outline: none;
    color: #6E7781;
`;

export const Input = styled.input`
    width: 291px;
    height: 48px;
    border-radius: 0px 8px 8px 0px;
    font-size: 14px;
    border: 1px solid ${({border}) => border ? 'red' : ' #D0D7DE'};
    padding: 6px 12px 6px 12px;
    outline: none;
`;

export const Button = styled.div`
    width: 390px;
    height: 48px;
    font-size: 16px;
    border-radius: 8px;
    background-color: #1890FF;
    border: 1px solid #2F54EB;
    padding: 12px 18px 12px 18px;
    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    &:hover {
        background-color: #0056b3;
    }
`;
export const Back = styled.img`
width: 40px;
height: 40px;
margin: 10px;
`