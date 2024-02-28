import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-0%);
  }
`;

export const Container = styled.div`
display: flex;
overflow-y: auto;
`
export const AddContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
position: absolute;
background: #253E5F80;
`
export const Add = styled.div`
width: 597px;
height:100%;
background: #FFFFFF;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
animation: ${slideIn} 2s ease;
`
export const ImageAdd = styled.img`
width: 112px ;
height: 112px;
border-radius: 50%;
`
export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`
export const InputTitle = styled.p`
font-weight:500;
size: 16px;
line-height: 24px;
color: #929FAF;
`
export const AddInput = styled.input`
width: 500px;
height: 40px;
border-radius: 8px;
border: 1px solid #1890FF;
outline: none;

font-weight:500;
size: 16px;
line-height: 24px;

padding: 0px 15px;
`
export const ButtonWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 100px;
gap: 20px;
`
export const Button = styled.div`
width: 88px;
height:40px;
border-radius: 8px;
padding: 10px 16px 10px 16px;
color: ${((prop) => prop.rang ? 'white' : 'black')};
background-color: ${((prop) => prop.rang === true ? '#1890FF' : 'white')};
border: 1px solid #FFA39E;
cursor: pointer;
`