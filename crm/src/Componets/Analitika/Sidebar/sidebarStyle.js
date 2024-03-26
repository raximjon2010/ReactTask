import { styled } from "styled-components";

export const Main = styled.div`
width: 300px;
height: 100vh;
background:${({bg}) => bg ? '#F5F6F8': '#162539' };
color: ${(({color}) => color ? 'blue' : 'white')};
display: flex;
flex-direction: column;
overflow-y: auto ;
`
export const MenuTitle = styled.div`
height: 60px;
font-weight: 600;
font-size: 20px;
line-height: 28px;
color: #1890FF;
margin-left: 24px;
margin-top: 16px;
border-bottom: 1px solid #253E5F;
position: relative;
position: sticky;
top: 0;
`
export const Profile = styled.div`
display: flex;
align-items: center;
padding-top: 16px;
padding-left: 24px;
`
Profile.UserImage = styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
`
export const Name =styled.p`
font-weight; 600;
font-size: 14px;
line-height: 20px;
color: ${(({color})=> color ? '#253E5F' :'#F8FAFC')};
margin-left: 24px;
`
export const Email =styled.p`
font-weight; 500;
font-size: 12px;
line-height: 18px;
color: #929FAF;
margin-left: 24px;
`
export const Menu = styled.menu`
display: flex;
flex-direction: column;
margin-top: 20px;
height: 100%;
`

export const MenuItem = styled.div`
width: 100%;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color:${({bg}) => bg ? '#253E5F':'#F5F6F8'};
padding: 16px 24px;
margin-top: ${(({last}) => last && 'auto')};
border-top: ${({last}) => last && "1px solid gray"};
&:hover{
  background:${({bg}) => bg ? '#162539': '#F5F6F8' };
  cursor: pointer;
  color:${({bg}) => bg ? '#F5F6F8': '#162539'};
}
display: flex;
align-items: center;
gap: 20px;
`
export const Icon = styled.img`
width: 16px;
height: 16px;
`
export const ArrowImg = styled.img`
width: 16px;
height: 16px;
margin-left:auto;
transform: ${(({active}) => active && 'rotate(90deg)')};
`
export const OpenText = styled.p`
width: 100%;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: ${(({color}) => color ? '#253E5F': '#F8FAFC')};
&:hover{
  background: #253E5F;
  cursor: pointer;
  color: #1890FF;
}  
padding: 2px 24px;
`