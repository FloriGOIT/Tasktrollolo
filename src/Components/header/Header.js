import React, { useState, useEffect } from 'react';
import { HeaderWrapper, Title, InitialWrapper } from './Header.styled';
import ThemeSwitcher from './ThemeSwicher';
import Modal from './Modal';

const Header = ({ user, loading, error, toggleTheme }) => {
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(user);

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    const handleSave = (newName) => {
        console.log("Noul nume este:", newName);
        setCurrentUser(prevUser => ({ ...prevUser, name: newName }));
        setShowModal(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading user data</div>;
    }

    return (
        <HeaderWrapper>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ThemeSwitcher toggleTheme={toggleTheme} />
                {currentUser && (
                    <>
                        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={handleToggleModal}>
                            <Title style={{ display: 'flex', alignItems: 'center' }}>
                                {currentUser.name}
                                <div style={{
                                    width: '0',
                                    height: '0',
                                    borderLeft: '5px solid transparent',
                                    borderRight: '5px solid transparent',
                                    borderTop: '5px solid white',
                                    marginLeft: '8px'
                                }} />
                            </Title>
                        </div>
                        <InitialWrapper>
                            {currentUser.name.charAt(0)}
                        </InitialWrapper>
                    </>
                )}
            </div>
            {showModal && (
                <Modal 
                    isOpen={showModal} 
                    onClose={handleToggleModal} 
                    user={currentUser} 
                    onSave={handleSave} 
                />
            )}
        </HeaderWrapper>
    );
};

export default Header;
