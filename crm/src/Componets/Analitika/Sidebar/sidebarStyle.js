import { styled } from "styled-components";
import Frame_2 from '../icon/Frame_2.svg'
import Frame from '../icon/Frame.svg'
import Guruhlar from '../icon/Gruhlar.svg'
import Kurslar from '../icon/Kurslar.svg'
import Moliya from '../icon/Moliya.svg'
import HR from '../icon/RD.svg'
import Talaba from '../icon/Talaba.svg'
import Vector from '../icon/Vector.svg'
import Arrow from '../icon/Arrow.svg'

export const Main = styled.div`
width: 300px;
height: 100vh;
background: #162539;
color: #F5F6F8;

display: flex;
flex-direction: column;
overflow-y: auto;
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
color: #F8FAFC;
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
color: #F8FAFC;
padding: 16px 24px;
margin-top: ${(({last}) => last ? 'auto' : '')};
border-top: ${({last}) => last && "1px solid gray"};
&:hover{
  background: #253E5F;
  cursor: pointer;
  color: #1890FF;
}  
display: flex;
align-items: center;
gap: 20px;
`
export const Icon = styled.img`
width: 16px;
height: 16px;
`
Icon.Arrow = styled.img`
width: 16px;
height: 16px;
margin-left:auto;
transform: ${(({active}) => active ? 'rotate(90deg)' : '')};
`
export const OpenText = styled.div`
width: 100%;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #F8FAFC;
&:hover{
  background: #253E5F;
  cursor: pointer;
  color: #1890FF;
}  
padding: 16px 24px;
display: flex;
align-items: center;
gap: 20px;
`