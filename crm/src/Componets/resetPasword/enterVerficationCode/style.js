import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const VerficationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
export const VerficationWrapper = styled.div`
    width: 430px;
    height: 350px;
    padding: 12px 20px 12px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export  const Title = styled.h1`
    font-size: 28px;
    text-align: center;
    font-weight: 500;
    line-height: 38px;
`;
export const Description = styled.p`
    font-size: 14px;
    text-align: center;
    font-weight: 400;
    line-height: 20px;
    color: #525866;
    cursor: pointer;
`;
export const Input = styled.input`
    width: 200px;
    height: 64px;
    border-radius: 12px;
    font-size: 14px;
    border: ${({border}) => border ? '3px' : '1px'} solid ${({border}) => {
        switch(border) {
            case null : return '#E2E4E9';
            case true : return 'green'; 
            case false : return 'red';
         }
} };
    padding: 12px 16px 12px 16px;
    background: #FFFFFF;
    color:#20232D;
    outline: none;
    display: flex;
    justify-content: center;
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