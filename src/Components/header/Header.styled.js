import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: calc(100% - 350px);
    height: 68px;
    padding: 0 24px;
    background: #1e1e1e;
    color: #ffffff;
    position: fixed; 
    top: 0; 
    left: 302px;
    z-index: 1000; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    transition: background 0.3s ease; 
`;

export const Title = styled.h1`
    font-size: 24px;
    margin: 0;
    margin-left: 10px; 
    cursor: pointer; 
    font-weight: 500; 
    transition: color 0.3s ease; 
    display: flex;
    align-items: center; 
`;

export const InitialWrapper = styled.div`
    width: 32px; 
    height: 32px; 
    border-radius: 8px 0 0 0; 
    background: #61dafb; 
    color: #161616; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px; 
    font-weight: bold; 
    margin-left: 4px; 
`;

export const Email = styled.span`
    display: none; 
    font-size: 14px;
    color: white;
    position: absolute; 
    background: #282c34; 
    padding: 5px;
    border-radius: 4px;
    top: 50%; 
    left: 100%; 
    transform: translateY(-50%); 
    z-index: 10; 
    white-space: nowrap; 
    transition: opacity 0.3s ease; 
`;
