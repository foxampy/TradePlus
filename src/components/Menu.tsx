import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #B3B3B3;
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  transition: color 0.3s;

  &:hover {
    color: #00FFB3;
  }
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${props => props.isOpen ? '0' : '-250px'};
  width: 250px;
  height: 100vh;
  background: #1A1A1A;
  transition: left 0.3s;
  z-index: 1000;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
`;

const MenuSection = styled.div`
  margin-bottom: 20px;
`;

const MenuTitle = styled.h3`
  color: #00FFB3;
  margin: 0 0 10px 0;
`;

const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background: none;
  border: none;
  color: #B3B3B3;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #00FFB3;
    background: rgba(0, 255, 179, 0.1);
  }
`;

const PlusButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #00FFB3;
  border: none;
  color: #1A1A1A;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 255, 179, 0.5);
  }
`;

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </MenuButton>
      <MenuContainer isOpen={isOpen}>
        <MenuSection>
          <MenuTitle>Аккаунт</MenuTitle>
          <MenuItem onClick={() => navigate('/account')}>Профиль</MenuItem>
          <MenuItem onClick={() => navigate('/wallets')}>Кошельки</MenuItem>
          <MenuItem onClick={() => navigate('/messages')}>Сообщения</MenuItem>
          <MenuItem onClick={() => navigate('/contacts')}>Контакты</MenuItem>
        </MenuSection>

        <MenuSection>
          <MenuTitle>Торговля</MenuTitle>
          <MenuItem onClick={() => navigate('/trade')}>Торговать</MenuItem>
          <MenuItem onClick={() => navigate('/p2p')}>P2P</MenuItem>
          <MenuItem onClick={() => navigate('/staking')}>Стейкинг</MenuItem>
          <MenuItem onClick={() => navigate('/exchanges')}>Биржи</MenuItem>
        </MenuSection>

        <MenuSection>
          <MenuTitle>Инвестиции</MenuTitle>
          <MenuItem onClick={() => navigate('/ico')}>ICO</MenuItem>
          <MenuItem onClick={() => navigate('/airdrops')}>Аирдропы</MenuItem>
          <MenuItem onClick={() => navigate('/crowdfunding')}>Краундфайдинг</MenuItem>
        </MenuSection>

        <MenuSection>
          <MenuTitle>Обучение</MenuTitle>
          <MenuItem onClick={() => navigate('/education')}>Курсы</MenuItem>
          <MenuItem onClick={() => navigate('/streams')}>Стримы</MenuItem>
          <MenuItem onClick={() => navigate('/analytics')}>Аналитика</MenuItem>
        </MenuSection>

        <MenuSection>
          <MenuTitle>Дополнительно</MenuTitle>
          <MenuItem onClick={() => navigate('/settings')}>Настройки</MenuItem>
          <MenuItem onClick={() => navigate('/help')}>Помощь</MenuItem>
          <MenuItem onClick={() => navigate('/about')}>О нас</MenuItem>
        </MenuSection>
      </MenuContainer>
      <PlusButton onClick={() => navigate('/plus')}>+</PlusButton>
    </>
  );
}; 