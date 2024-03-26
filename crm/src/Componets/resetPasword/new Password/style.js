import styled from 'styled-components';

export const NewPWContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const NewPWWrapper = styled.div`
    width: 430px;
    height: 550px;
    padding: 12px 20px 12px 20px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
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
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const InputLabel = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #434343;
    letter-spacing: 0.5%;
`;

export const Input = styled.input`
    width: 390px;
    height: 48px;
    border-radius: 8px;
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
export const Texts = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #8C8C8C;

display: flex;
align-items: center;
gap: 10px;
`
export const Icon = styled.img`
width: 20px;
height: 20px;
`
export const CheckTitle = styled.div`
font-size: 24px;
font-weight: 500;
line-height: 30px;
color: green;
text-align: center;
`