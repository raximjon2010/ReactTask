import { Container, DateContainer, DateInfo, DateInfoContainer, DateInput, EmailTitile, EmailXabarlar, GreenImage, Image, ImageDateContainer, Info, Item, MalumotlarContainer, Moliya, Name, TalabaTitle, Talabalar, Texts, Title, TopImage, Week, WeekContainer, WeekName,  } from "./footerStyle";
import {data} from '../../utils/footer'
import TopButton from '../../icon/Top_icon.svg';
import Gray from '../../icon/RadiusGray.svg';
import Green from '../../icon/RadiusGreen.svg';

const Footer = () => {
    return (
        <Container>
            <EmailXabarlar>
                <EmailTitile>Email Xabarlar <span>{data.length}</span></EmailTitile>
                {
                    data.map((value) => {
                        return (
                            <Item key={value.id}>
                   <input type="checkbox" />
                   <Image src={value.image} alt="" />
                   <Name>
                    <Title>{value.name}</Title>
                    <Title desc>{value.status}</Title>
                   </Name>
                   <Title>{value.title}</Title>
                   <Title desc>{value.time}</Title>
                </Item>
                        )
                    })
                }
            </EmailXabarlar>
            <Moliya>
                <DateContainer>
                <DateInput type="date" />
                </DateContainer>
                <WeekContainer>
                <Week background = 'true'>
                <WeekName>DU</WeekName>
                <WeekName text = 'true'>22</WeekName>
                </Week>
                <Week>
                <WeekName>SE</WeekName>
                <WeekName text = 'true'>22</WeekName>
                </Week>
                <Week>
                <WeekName>CHO</WeekName>
                <WeekName text = 'true'>22</WeekName>
                </Week>
                <Week>
                <WeekName>PA</WeekName>
                <WeekName text = 'true'>22</WeekName>
                </Week>
                <Week>
                <WeekName>JU</WeekName>
                <WeekName text = 'true'>22</WeekName>
                </Week>
                <Week>
                <WeekName>ShA</WeekName>
                <WeekName text = 'true'>22</WeekName>
                </Week>
                <Week>
                <WeekName>YA</WeekName>
                <WeekName text = 'true'>22</WeekName>
                </Week>
                </WeekContainer>
                <DateInfoContainer>
                    <DateInfo>
                        <Info year = 'true'>24 fevral, 2023</Info>
                        <Info>8 320 000</Info>
                    </DateInfo>
                    <ImageDateContainer>
                        <TopImage src={TopButton} alt="eror"/>
                        <Texts>+22%</Texts>
                    </ImageDateContainer>
                </DateInfoContainer>
                <MalumotlarContainer>
                    <Talabalar>
                        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                        <GreenImage src={Green} alt="" />
                        <TalabaTitle>Talabalar</TalabaTitle>
                        </div>
                        <TalabaTitle>5 760 000</TalabaTitle>
                    </Talabalar>
                    <Talabalar>
                        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                        <GreenImage src={Gray} alt="" />
                        <TalabaTitle>Darsliklar sotuvi</TalabaTitle>
                        </div>
                        <TalabaTitle>5 760 000</TalabaTitle>
                    </Talabalar>
                </MalumotlarContainer>
                
            </Moliya>
        </Container>
    );
}

export default Footer;