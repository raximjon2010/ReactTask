import Search from '../icon/Search.svg';
import { DateInput, Navbar, Sanalar, SearchIcon, SearchInput, Search_input, SelectTil, Soat, Title, Wrapper } from './bodyStyle.js';
import Card from './card';
import Footer from './footer/footer';

import BodyProvider from '../../../context/Analitika/Body';
const Body = () => {
    return (
        <Wrapper>
        {/*==================================================  */}
                        <Navbar>
                            <SearchInput>
                                <Search_input type='search' placeholder='Search'/>
                                <SearchIcon src = {Search}/>
                            </SearchInput>
                            <Sanalar>
                                <Soat>17:00</Soat>
                                <DateInput type="date" />
                                <SelectTil>
                                    <option value="UZB">O'zbekiston</option>
                                    <option value="ENG">ENGILISH</option>
                                    <option value="RUS">RUSSIAN</option>
                                </SelectTil>
                            </Sanalar>
                        </Navbar>
        {/*==================================================  */}
                   <Title style={{marginLeft: '20px'}}>Analitika</Title>
                   <BodyProvider>
                 <Card />
                   </BodyProvider>
                            <Footer/>
                        </Wrapper>
                        
    )
}

export default Body;