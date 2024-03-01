import { Container, EmailXabarlar, Image, Item, Moliya, Name, Title,  } from "./footerStyle";
import {data} from '../../utils/footer'
import { useState } from "react";

const Footer = () => {
    const [select, setSelect] = useState(null)
    const Select = (e) => {
        setSelect(e.target.value)        
    }
    return (
        <Container>
            <EmailXabarlar>
                <div>
            <h3>Email Xabarlar {data.length}</h3>
                {
                    select ? <button>Delete</button> : <button></button>
                }
                </div>
                {
                    data.map((value) => {
                        return (
                    <Item>
                   <input onChange={Select} type="checkbox" />
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
                
            </Moliya>
        </Container>
    );
}

export default Footer;