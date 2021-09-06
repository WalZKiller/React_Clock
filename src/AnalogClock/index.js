import React from 'react';

//Styles
import { Wrapper, Content, CenterHands, Numbers, Circle, HourHand, MinuteHand, SecondHand } from './AnalogClock.styles';

const AnalogClock = ({ rotation }) => (
    <Wrapper>
        <Content>
            <CenterHands>
                <Numbers rotation={rotation}>12</Numbers>
                <Numbers rotation={rotation}>1</Numbers>
                <Numbers rotation={rotation}>2</Numbers>
                <HourHand />
                <MinuteHand />
                <SecondHand />
                <Circle />
            </CenterHands>
        </Content>
    </Wrapper>
)

export default AnalogClock;