import React, { useState } from 'react';
import styled from 'styled-components';

const SwitcherButton = styled.button`
    margin-left: auto;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    position: relative;
    display: flex;
    align-items: center;
`;

const Arrow = styled.div`
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
    margin-left: 8px;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: #161616; 
    border-radius: 4px;
    margin-top: 4px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Option = styled.div`
    padding: 8px 16px;
    cursor: pointer;
    background: transparent;
    color: white;
    transition: background 0.3s ease, color 0.3s ease;

    &:hover {
        background: transparent;
        color: #BEDBB0; 
    }
`;

const ThemeSwitcher = ({ toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleThemeChange = (theme) => {
        toggleTheme(theme);
        setIsOpen(false); 
    };

    return (
        <div style={{ position: 'relative' }}>
            <SwitcherButton onClick={handleToggleDropdown}>
                Switch Theme
                <Arrow />
            </SwitcherButton>
            <Dropdown isOpen={isOpen}>
                <Option onClick={() => handleThemeChange('light')}>Theme Light</Option>
                <Option onClick={() => handleThemeChange('dark')}>Theme Dark</Option>
            </Dropdown>
        </div>
    );
};

export default ThemeSwitcher;
