import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { Wrapper, Content, Text, ButtonDigital, ButtonAnalog } from './Home.styles';

const Home = () => (
    <Wrapper>
        <Text>Choose your clock:</Text>
        <Content>
            <Link to='/digital-clock'>
                <ButtonDigital>Digital Clock</ButtonDigital>
            </Link>
            <Link to='/analog-clock'>
                <ButtonAnalog>Analog Clock</ButtonAnalog>
            </Link>
        </Content>
    </Wrapper>

)

export default Home;