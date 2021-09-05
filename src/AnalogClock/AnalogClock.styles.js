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
    border: rgba(0, 0, 0, 0.9) solid 0.5vmin;
    background: rgba(255, 255, 255, 0.9);
`;

export const Numbers = styled.div`
    color: red;
    display: flex;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    font-size: 4vmin;
    color: black;
`;

export const HourHand = styled.div``;