import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(to right, #0077b6, #95d5b2);
    width: 100vw;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    body {
        width: 100%;
        height: 100%;
    }
`;

export const Content = styled.div`
    width: 70vmin;
    height: 70vmin;
    border-radius: 50%;
    border: rgba(0, 0, 0, 0.9) solid 1vmin;
    background: rgba(255, 255, 255, 0.9);
`;

export const CenterHands = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`;

export const Numbers = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
`;

export const Circle = styled.div`
    width: 5vmin;
    height: 5vmin;
    background: black;
    position: fixed;
    border-radius: 50%;
`;

export const HourHand = styled.div`
    width: 1.5vmin;
    height: 15vmin;
    border-radius: 1vmin 1vmin 0 0;
    background: black;
    transform-origin: bottom;
    transform: translateY(-50%) rotate(90deg);
    position: fixed;
`;

export const MinuteHand = styled.div`
    width: 1vmin;
    height: 28vmin;
    border-radius: 1vmin 1vmin 0 0;
    background: black;
    transform-origin: bottom;
    transform: translateY(-50%) rotate(30deg);
    position: fixed;
`;

export const SecondHand = styled.div`
    width: 0.5vmin;
    height: 30vmin;
    border-radius: 1vmin 1vmin 0 0;
    background: red;
    transform-origin: bottom;
    transform: translateY(-50%);
    position: fixed;
`;