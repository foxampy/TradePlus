import React from 'react';
import styled, { keyframes } from 'styled-components';
import { DraggableWindow } from '../DraggableWindow';

const moveLine = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`;

const AnalyzerContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #2A2A2A;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

const ChartLine = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background: #00FFB3;
  animation: ${moveLine} 2s linear infinite;
`;

const PredictionContainer = styled.div`
  padding: 15px;
  background: #2A2A2A;
  border-radius: 4px;
  border: 2px solid #00FFB3;
`;

const PredictionTitle = styled.h4`
  color: #00FFB3;
  margin: 0 0 10px 0;
`;

const PredictionText = styled.p`
  color: #B3B3B3;
  margin: 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  border: 2px solid #00FFB3;
  background: none;
  color: #00FFB3;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #FFFFFF;
    color: #FFFFFF;
  }
`;

interface AIAnalyzerWindowProps {
  index?: number;
}

export const AIAnalyzerWindow: React.FC<AIAnalyzerWindowProps> = ({ index = 0 }) => {
  return (
    <DraggableWindow
      title="ИИ Анализатор"
      initialPosition={{ x: 50, y: 300 }}
      initialSize={{ width: 400, height: 300 }}
      index={index}
    >
      <AnalyzerContainer>
        <ChartContainer>
          <ChartLine />
        </ChartContainer>
        <PredictionContainer>
          <PredictionTitle>Рекомендация ИИ</PredictionTitle>
          <PredictionText>
            Рекомендуем купить BTC по цене $52,000
          </PredictionText>
        </PredictionContainer>
        <ActionButtons>
          <ActionButton>Анализ</ActionButton>
          <ActionButton>Совет</ActionButton>
          <ActionButton>Настройки</ActionButton>
        </ActionButtons>
      </AnalyzerContainer>
    </DraggableWindow>
  );
}; 