import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { DraggableWindow } from '../DraggableWindow';

const highlight = keyframes`
  0% { border-color: #B3B3B3; }
  50% { border-color: #FF6EC7; }
  100% { border-color: #B3B3B3; }
`;

const QuotesContainer = styled.div<{ isHighlighted: boolean }>`
  padding: 20px;
  border: 2px solid #B3B3B3;
  border-radius: 4px;
  animation: ${props => props.isHighlighted ? highlight : 'none'} 1s infinite;
  transition: all 0.3s;
`;

const QuotesTitle = styled.h3`
  color: #00FFB3;
  margin: 0 0 20px 0;
`;

const StakingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SliderLabel = styled.label`
  color: #B3B3B3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Slider = styled.input`
  width: 100%;
  height: 8px;
  -webkit-appearance: none;
  background: #2A2A2A;
  border-radius: 4px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #FF6EC7;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #FF6EC7;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const StakingButton = styled.button`
  padding: 12px 24px;
  background: none;
  border: 2px solid #FF6EC7;
  color: #FF6EC7;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 110, 199, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: translateX(100%);
  }
`;

const QuoteItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid #B3B3B3;
  border-radius: 4px;
  color: #B3B3B3;
  transition: all 0.3s;
  animation: pulse 2s infinite;

  &:hover {
    border-color: #FFFFFF;
    color: #FFFFFF;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
`;

const QuoteName = styled.span`
  color: #00FFB3;
`;

const QuotePrice = styled.span`
  font-weight: bold;
`;

const QuoteChange = styled.span<{ isPositive: boolean }>`
  color: ${props => props.isPositive ? '#00FFB3' : '#FF6EC7'};
`;

const quotes = [
  { name: 'BTC/USD', price: '50,123.45', change: '+2.5%', isPositive: true },
  { name: 'ETH/USD', price: '3,456.78', change: '-1.2%', isPositive: false },
  { name: 'AAPL', price: '175.23', change: '+0.8%', isPositive: true },
  { name: 'TSLA', price: '850.45', change: '-3.1%', isPositive: false }
];

interface QuotesWindowProps {
  index?: number;
}

export const QuotesWindow: React.FC<QuotesWindowProps> = ({ index = 0 }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [tokenAmount, setTokenAmount] = useState(50);
  const [showStaking, setShowStaking] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHighlighted(true);
      setShowStaking(true);
    }, 7000); // 5 секунд + 2 секунды после TeacherWindow

    return () => clearTimeout(timer);
  }, []);

  return (
    <DraggableWindow
      title="Котировки"
      initialPosition={{ x: 50, y: 520 }}
      initialSize={{ width: 400, height: 200 }}
      index={index}
    >
      <QuotesContainer isHighlighted={isHighlighted}>
        <QuotesTitle>Стейкинг токенов</QuotesTitle>
        {showStaking ? (
          <StakingContainer>
            <SliderContainer>
              <SliderLabel>
                <span>Количество токенов:</span>
                <span>{tokenAmount}</span>
              </SliderLabel>
              <Slider
                type="range"
                min="1"
                max="100"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(Number(e.target.value))}
              />
            </SliderContainer>
            <StakingButton>
              Начать стейкинг
            </StakingButton>
          </StakingContainer>
        ) : (
          <div>Загрузка котировок...</div>
        )}
      </QuotesContainer>
    </DraggableWindow>
  );
}; 