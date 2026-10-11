import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { DraggableWindow } from '../DraggableWindow';

const blink = keyframes`
  0% { border-color: #00FFB3; }
  50% { border-color: #FF6EC7; }
  100% { border-color: #00FFB3; }
`;

const TeacherContainer = styled.div<{ isBlinking: boolean }>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 2px solid #00FFB3;
  border-radius: 4px;
  animation: ${props => props.isBlinking ? blink : 'none'} 1s infinite;
`;

const TeacherTitle = styled.h3`
  color: #00FFB3;
  margin: 0;
`;

const TeacherText = styled.p`
  color: #B3B3B3;
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface TeacherStreamWindowProps {
  index?: number;
}

export const TeacherStreamWindow: React.FC<TeacherStreamWindowProps> = ({ index = 0 }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlinking(true);
      setShowText(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DraggableWindow
      title="Учитель"
      initialPosition={{ x: 50, y: 150 }}
      initialSize={{ width: 400, height: 200 }}
      index={index}
    >
      <TeacherContainer isBlinking={isBlinking}>
        <TeacherTitle>Учитель</TeacherTitle>
        <TeacherText className={showText ? 'show' : ''}>
          Уже пора приумножать свои активы.
        </TeacherText>
      </TeacherContainer>
    </DraggableWindow>
  );
}; 