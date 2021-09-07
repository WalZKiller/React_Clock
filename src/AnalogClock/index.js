import React from 'react';

//Styles
import {
    Wrapper,
    Content, 
    CenterHands, 
    Number1, Number2, Number3, Number4, Number5, Number6, Number7, Number8, Number9, Number10, Number11, Number12,
    Circle, HourHand, MinuteHand, SecondHand } from './AnalogClock.styles';

const AnalogClock = () => {

    function setClock () {
        const date = new Date();
        const secondsRatio = date.getSeconds() / 60;
        const minuteRatio = (secondsRatio + date.getMinutes()) / 60;
        const hourRatio = (minuteRatio + date.getHours()) / 12;

        setRotation(HourHand, secondsRatio);
        /*setRotation(MinuteHand, minuteRatio);
        setRotation(SecondHand, hourRatio);*/
    }
    
    function setRotation (element, rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio * 360);
    }

    setClock();

    return (
    <Wrapper>
        <Content>
            <CenterHands>
                <Number1>1</Number1>
                <Number2>2</Number2>
                <Number3>3</Number3>
                <Number4>4</Number4>
                <Number5>5</Number5>
                <Number6>6</Number6>
                <Number7>7</Number7>
                <Number8>8</Number8>
                <Number9>9</Number9>
                <Number10>10</Number10>
                <Number11>11</Number11>
                <Number12>12</Number12>
                <HourHand />
                <MinuteHand />
                <SecondHand />
                <Circle />
            </CenterHands>
        </Content>
    </Wrapper>
)}

export default AnalogClock;