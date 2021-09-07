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
    position: relative;

    body {
        width: 100%;
        height: 100%;
    }
`;

export const Content = styled.div`
    width: 65vw;
    height: 50vh;
    border-radius: 20px 20px 20px 20px;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Abel', sans-serif;
    font-size: 5rem;
    position: absolute;
`;

export const Back = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6vw;
    height: 3vw;
    border-radius: 2rem;
    border: none;
    transform: translateY(-20vw) translateX(-40vw);
    font-family: 'Abel', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: white;

    :hover {
        background: rgba(255, 255, 255, 0.5);
        color: black;
    }
`;