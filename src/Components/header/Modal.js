import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
    position: absolute;
    top: 60px; 
    left: 50%;
    transform: translate(-50%, 0);
    background: #2C2C2C; 
    border-radius: 12px; 
    padding: 30px;
    z-index: 1000; 
    color: white; 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    margin-bottom: 10px; 
`;

const Title = styled.h2`
    text-align: center; 
    margin: 20px 0; 
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: none;
    border-radius: 8px;
    background: #3B3B3B; 
    color: white; 

    &:focus {
        outline: none;
        border: 2px solid #BEDDB0; 
    }
`;

const Button = styled.button`
    background: #BEDDB0; 
    color: black; 
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background: #A9CDA3; 
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
`;

const InitialWrapper = styled.div`
    width: 32px; 
    height: 32px; 
    border-radius: 50%; 
    background: #61dafb; 
    color: #161616; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px; 
    margin: 0 auto; 
`;

const InitialContainer = styled.div`
    display: flex;
    justify-content: center; 
    margin-bottom: 10px; 
`;

const Modal = ({ isOpen, onClose, user, onSave }) => {
    const [newName, setNewName] = useState(user.name); 

    if (!isOpen) return null; 

    const handleSubmit = () => {
        if (newName.trim() === "") {
            alert("The name cannot be empty."); 
            return;
        }
        onSave(newName); 
        onClose(); 
    };

    return (
        <ModalContainer>
            <ModalHeader>
                <CloseButton onClick={onClose}>×</CloseButton>
            </ModalHeader>
            <Title>Change Username</Title> 
            <InitialContainer>
                <InitialWrapper>
                    {user.name.charAt(0)}
                </InitialWrapper>
            </InitialContainer>
            <Input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="New name"
            />
            <Input
                type="text"
                value={user.email}
                readOnly
                placeholder="Email"
            />
            <Button onClick={handleSubmit}>Save</Button>
        </ModalContainer>
    );
};

export default Modal;
