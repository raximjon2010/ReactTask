import styled from 'styled-components'; 

export const Container = styled.div`
width: 100%;
height:280px;
background: #FFFFFF;
display: flex;
`

export const EmailXabarlar = styled.div`
width: 695px;
height:280px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
border: 1px solid #F0F0F0;
border-radius: 8px;
`
export const Item = styled.div`
width: 100%;
height: 40px;
display: flex;
align-items: center;
justify-content: space-around;
padding-left: 20px;
`
export const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`
export const Name = styled.div`
display: flex;
flex-direction: column;
`
export const Title = styled.div`
font-weight: 500;
font-size: ${(({desc}) => desc ? '12px' : '14px')};
color: ${(({desc}) => desc ? '#929FAF' : '#253E5F')};
line-height: 20px;
`


export const Moliya = styled.div`
display: flex;
flex: 1;
border: 1px solid #F0F0F0;
`