import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import {
    Wrapper,
    Content, 
    CenterHands, 
    Number1, Number2, Number3, Number4, Number5, Number6, Number7, Number8, Number9, Number10, Number11, Number12,
    Circle, HourHand, MinuteHand, SecondHand, Back } from './AnalogClock.styles';

const AnalogClock = () => {

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const secondsRatio = date.getSeconds() / 60;
    const minuteRatio = (secondsRatio + date.getMinutes()) / 60;
    const hourRatio = (minuteRatio + date.getHours()) / 12;

    const hoursStyle = {
        transform: `rotate(${(hour + minuteRatio) * 30}deg)`
      };

    const minuteStyle = {
        transform: `rotate(${minute * 6}deg)`
      };

    const secondStyle = {
        transform: `rotate(${second * 6}deg)`
      };

    return (
        
    <Wrapper>
        <Link to='/' style={{ textDecoration: 'none'}}>
            <Back>Back</Back>
        </Link>
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
                <HourHand style={hoursStyle}/>
                <MinuteHand style={minuteStyle}/>
                <SecondHand style={secondStyle}/>
                <Circle />
            </CenterHands>
        </Content>
    </Wrapper>
)}

export default AnalogClock;