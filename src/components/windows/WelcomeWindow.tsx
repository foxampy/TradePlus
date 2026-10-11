import React from 'react';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0% { box-shadow: 0 0 5px #00FFB3, 0 0 10px #00FFB3, 0 0 15px #00FFB3; }
  50% { box-shadow: 0 0 10px #00FFB3, 0 0 20px #00FFB3, 0 0 30px #00FFB3; }
  100% { box-shadow: 0 0 5px #00FFB3, 0 0 10px #00FFB3, 0 0 15px #00FFB3; }
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #1A1A1A;
  padding: 20px;
`;

const Title = styled.h1`
  color: #00FFB3;
  margin-bottom: 30px;
  text-align: center;
`;

const GiftContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const GiftIcon = styled.div`
  width: 100px;
  height: 100px;
  background: #00FFB3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #1A1A1A;
  animation: ${glow} 2s infinite;
`;

const TokenAmount = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  background: #FF6EC7;
  color: #1A1A1A;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
`;

const Message = styled.p`
  color: #B3B3B3;
  text-align: center;
  margin-bottom: 30px;
  max-width: 400px;
`;

const ClaimButton = styled.button`
  padding: 12px 24px;
  background: #00FFB3;
  border: none;
  border-radius: 4px;
  color: #1A1A1A;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 10px rgba(0, 255, 179, 0.5);
  }
`;

interface WelcomeWindowProps {
  onClaim: () => void;
}

export const WelcomeWindow: React.FC<WelcomeWindowProps> = ({ onClaim }) => {
  return (
    <WelcomeContainer>
      <Title>Добро пожаловать!</Title>
      <GiftContainer>
        <GiftIcon>🎁</GiftIcon>
        <TokenAmount>100 токенов</TokenAmount>
      </GiftContainer>
      <Message>
        Спасибо за регистрацию! В подарок вы получаете 100 токенов.
        Давайте начнем наше сотрудничество и партнерство!
      </Message>
      <ClaimButton onClick={onClaim}>
        Получить подарок
      </ClaimButton>
    </WelcomeContainer>
  );
}; 