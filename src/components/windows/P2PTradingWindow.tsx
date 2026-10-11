import React from 'react';
import styled from 'styled-components';
import { DraggableWindow } from '../DraggableWindow';

const TradingContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TradingTitle = styled.h3`
  color: #00FFB3;
  margin: 0;
`;

const TradingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  background: #2A2A2A;
  border: 1px solid #B3B3B3;
  border-radius: 4px;
  color: #B3B3B3;
  outline: none;

  &:focus {
    border-color: #00FFB3;
  }
`;

const Button = styled.button`
  padding: 10px;
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

interface P2PTradingWindowProps {
  index?: number;
}

export const P2PTradingWindow: React.FC<P2PTradingWindowProps> = ({ index = 0 }) => {
  return (
    <DraggableWindow
      title="P2P Торговля"
      initialPosition={{ x: 50, y: 50 }}
      initialSize={{ width: 400, height: 300 }}
      index={index}
    >
      <TradingContainer>
        <TradingTitle>Создать ордер</TradingTitle>
        <TradingForm>
          <Input type="text" placeholder="Количество токенов" />
          <Input type="text" placeholder="Цена за токен" />
          <Button type="submit">Создать ордер</Button>
        </TradingForm>
      </TradingContainer>
    </DraggableWindow>
  );
}; 