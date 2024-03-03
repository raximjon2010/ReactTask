import styled from 'styled-components'; 

export const Container = styled.div`
width: 100%;
height:280px;
background: #FFFFFF;
display: flex;
gap: 10px;
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
cursor: pointer;
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
export const EmailTitile = styled.div`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color:#253E5F;
span{
font-size: 16px;
font-weight: 500;
line-height: 24px;
width: 28px;
height: 28px;
color: #FFFFFF;
background: #1890FF;
padding: 4px 8px 4px 8px;
border-radius: 16px;
}
`

export const Moliya = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
flex: 1;
border: 1px solid #F0F0F0;

`
export const DateContainer = styled.div`
display: flex;
align-items: center;
`

export const DateInput = styled.input`
width: 100%;
height: 20px;
font-weight: 600;
font-size: 14px;
line-height:20px;
color:#253E5F;
border: none; 
outline: none;
`
export const WeekContainer = styled.div`
width: 100%;
height: 72px;
display: flex;
align-items: center;
justify-content: space-around;
cursor: pointer;
`
export const Week = styled.div`
width: 48px;
height: 72px;
border-radius: 24px;
border: 1px solid #F0F0F0;
background: ${(({background}) => background && '#1890FF')};

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const WeekName = styled.div`
font-size: 14px;
font-weight: 500;
line-height: 20px;
color: ${(({text}) => text ? 'black' : '#929FAF')}
`
export const DateInfoContainer = styled.div`
height: 60px;
display: flex;
align-items: center;
margin-right: auto;
margin-left: 20px;
`
export const DateInfo = styled.div`
display: flex;
flex-direction: column;
`
export const Info = styled.div`
font-size: ${(({year}) => year ? '12px' : '32px')};
font-weight: ${(({year}) => year ? '500' : '600')};
line-height: ${(({year}) => year ? '18px' : '40px')};
color: ${(({year}) => year ? '#929FAF' : '#253E5F')};
`
export const ImageDateContainer = styled.div`
display: flex;
align-items: center;
gap: 15px;
margin-top: 10px;
`
export const TopImage = styled.img`
width: 40px;
height: 40px;
`
export const Texts = styled.div`
font-weight: 500;
font-size: 30px;
line-height: 30px;
color: #52C41A;
`
export const MalumotlarContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
`
export const Talabalar = styled.div`
height: 20px;
display: flex;
align-items: center;
justify-content: space-between;
align-items: center;
padding: 0px 20px;
`
export const TalabaTitle = styled.div`
font-size: 14px;
font-weight: 500;
line-height: 20px;
color: #253E5F;
`
export const GreenImage = styled.img`
width: 12px;
height: 12px;
`