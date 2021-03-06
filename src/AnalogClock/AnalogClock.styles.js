import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(to right, #0077b6, #95d5b2);
    width: 100vw;
    height: 100vh;
    margin: 0;
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

export const Number1 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(30deg);
`;

export const Number2 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(60deg);
`;

export const Number3 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(90deg);
`;

export const Number4 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(120deg);
`;

export const Number5 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(150deg);
`;

export const Number6 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(180deg);
`;

export const Number7 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(210deg);
`;

export const Number8 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(240deg);
`;

export const Number9 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(270deg);
`;

export const Number10 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(300deg);
`;

export const Number11 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(330deg);
`;

export const Number12 = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
    height: 70vmin;
    width: 70vmin;
    position: fixed;
    transform: rotate(0deg);
`;

export const Circle = styled.div`
    width: 5vmin;
    height: 5vmin;
    background: black;
    position: fixed;
    border-radius: 50%;
`;

export const HourHand = styled.div`
    width: 2vmin;
    height: 15vmin;
    border-radius: 1vmin 1vmin 0 0;
    background: black;
    transform-origin: bottom;
    position: fixed;
    top: 35vmin;
`;

export const MinuteHand = styled.div`
    width: 1.5vmin;
    height: 28vmin;
    border-radius: 1vmin 1vmin 0 0;
    background: black;
    transform-origin: bottom;
    position: fixed;
    top: 22vmin;
`;

export const SecondHand = styled.div`
    width: 0.5vmin;
    height: 30vmin;
    border-radius: 1vmin 1vmin 0 0;
    background: red;
    transform-origin: bottom;
    position: fixed;
    top: 20vmin;
`;

export const Back = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6vw;
    height: 3vw;
    border-radius: 2rem;
    border: none;
    transform: translateY(-20vw) translateX(-20vw);
    font-family: 'Abel', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: white;

    :hover {
        background: rgba(255, 255, 255, 0.5);
        color: black;
    }
`;