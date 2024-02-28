import Search from '../icon/Search.svg';
import { DateInput, Navbar, Sanalar, SearchIcon, SearchInput, Search_input, SelectTil, Soat, Title, Wrapper } from './bodyStyle.js';
import Card from './card';

const Body = ({Open}) => {
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
                   <Title>Analitika</Title>
                            <Card Add = {Open}/>
                        </Wrapper>
    )
}

export default Body;