import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { WelcomeWindow } from '@/components/windows/WelcomeWindow';

const AccountContainer = styled.div`
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
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const AuthButton = styled.button`
  padding: 12px 24px;
  border: 2px solid #00FFB3;
  background: none;
  color: #00FFB3;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #00FFB3;
    color: #1A1A1A;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 12px;
  background: #2A2A2A;
  border: 1px solid #B3B3B3;
  border-radius: 4px;
  color: #B3B3B3;
  outline: none;

  &:focus {
    border-color: #00FFB3;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
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

export const AccountPage = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    // Фиктивная авторизация через Google
    setShowWelcome(true);
  };

  const handleTelegramAuth = () => {
    // Фиктивная авторизация через Telegram
    setShowWelcome(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Фиктивная авторизация через email/password
    setShowWelcome(true);
  };

  const handleClaimGift = () => {
    navigate('/plus');
  };

  if (showWelcome) {
    return <WelcomeWindow onClaim={handleClaimGift} />;
  }

  return (
    <AccountContainer>
      <Title>Вход в аккаунт</Title>
      <AuthButtons>
        <AuthButton onClick={handleGoogleAuth}>Google</AuthButton>
        <AuthButton onClick={handleTelegramAuth}>Telegram</AuthButton>
      </AuthButtons>
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Пароль" />
        <SubmitButton type="submit">Войти</SubmitButton>
      </Form>
    </AccountContainer>
  );
}; 