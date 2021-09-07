import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(to right, #0077b6, #95d5b2);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Text = styled.div`
    font-family: 'Abel', sans-serif; 
    font-size: 2rem;
    color: white; 
`;

export const ButtonDigital = styled.button`
    background: linear-gradient(to left, #0077b6, #95d5b2);    
    width: 20vw;
    height: 10vw;
    font-family: 'Abel', sans-serif; 
    font-size: 2rem;
    color: white;   
    border: none;
    border-radius: 2rem;
    margin: 2rem;
    :hover {
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }
`;

export const ButtonAnalog = styled.button`
    background: linear-gradient(to left, #0077b6, #95d5b2);    
    width: 20vw;
    height: 10vw;
    font-family: 'Abel', sans-serif; 
    font-size: 2rem;
    color: white;   
    border: none;
    border-radius: 2rem;
    margin: 2rem;
    
    :hover {
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }
`;