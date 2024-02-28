import { styled } from "styled-components"

export const Navbar = styled.div`
height: 60px;
flex: 1;
background: #FFFFFF;
position: relative;

display: flex;
align-items: center;
`
export const SearchInput = styled.div`
display: flex;
flex: 1;
align-items: center;
gap: 10px;
margin-left: 30px;
`
export const Search_input = styled.input`
width: 450px;
height: 40px;
border-radius: 8px;
border: 1px solid #F0F0F0;
color: black;
outline-color: blue;
padding-left: 20px;
`
export const SearchIcon = styled.img`
width: 20px;
height: 20px;
`

export const Sanalar = styled.div`
display: flex;
align-items: center;
gap: 0px;
margin-right: 30px;
` 
export const DateInput = styled.input`
width: 178px;
height: 40px;
border-radius: 8px;
padding: 10px 16px 10px 20px;
border: none;
outline: none;

font-size: 12px;
font-weight: 500;
line-height: 20px;
`
export const Soat = styled.h1`
font-size: 24px;
font-weight: 600;
line-height: 32px;
color:  ;
color: #253E5F;
`
export const SelectTil = styled.select`
width: 147px;
height: 40px;
border-radius: 8px;
padding: 10px 16px 10px 20px;

font-weight: 500;
font: size:14px;
line-height: 20px;
border: none;
outline: none;
color: #253E5F;
`

{/*=============Body=====================================  */}

export const Body = styled.div`
height: 100%;
background: #FFFFFF;
border-radius: 8px;
margin-top: 10px;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
overflow: auto;

padding-left: 20px;
padding-right: 20px; 
`
export const Title = styled.h1`
font-weight: 600;
font-size: 20px;
line-height: 28px;
color:#253E5F;
margin: 5px;
`
export const Box = styled.div`
width: 344px;
height: 168px;
border-radius: 8px;
background: #F6FFED;
border: 1px solid #F0F0F0;
padding: 15px 20px 15px 20px;
`

export const Wrapper = styled.div`
background: #F6FFED;
display: flex;
flex-direction: column;
flex: 1;
 `  

export const BodyChild_1 = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 `
 export const BodyChild_1Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 `
 export const BoshIcon = styled.img`
 width: ${(props) => props.image === 'image' ? '130px' : '48px'};
 height: ${(props) => props.image === 'image' ? '130px' : '48px'};
 border-radius: 8px;
 padding: 8px;
 `
 export const TitleCard = styled.h1`
 font-weight: 600;
 font-size: ${(props) => props.title ==='number' ? '40px' : '20px'};
 line-height: 24px;
 color: #253E5F;
 `
 export const AddData = styled.div`
 width: 132px;
 height: 140px;
 border-radius: 8px;
 border: 1px solid #F0F0F0;
 background: #ADC6FF;

 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

 `
 export const AddEnd = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-end;
 `
 export const Image = styled.img`
 width: ${(({icon}) => icon ? '26px' : '132px')};
 height: ${(({icon}) => icon ? '26px' : '88px')};
 margin-right: ${(({icon}) => icon&& '10px')};
 `