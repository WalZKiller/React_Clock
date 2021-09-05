import React from 'react';

//Styles
import { Wrapper, Content, Numbers } from './AnalogClock.styles';

const AnalogClock = ({ numbers }) => (
    <Wrapper>
        <Content>
            <Numbers>12</Numbers>
        </Content>
    </Wrapper>
)

export default AnalogClock;