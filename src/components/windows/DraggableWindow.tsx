import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const WindowContainer = styled.div<{ isDragging: boolean }>`
  position: absolute;
  width: 15vw;
  height: 15vh;
  background: transparent;
  cursor: ${props => props.isDragging ? 'grabbing' : 'grab'};
  z-index: 1000;
`;

const WindowHeader = styled.div`
  height: 30px;
  background: #2A2A2A;
  border: 1px solid #00FFB3;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #00FFB3;
  font-weight: bold;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

const WindowContent = styled.div`
  height: calc(100% - 30px);
  overflow: hidden;
`;

interface DraggableWindowProps {
  title: string;
  children: React.ReactNode;
  initialPosition: { x: number; y: number };
  index: number;
}

export const DraggableWindow: React.FC<DraggableWindowProps> = ({
  title,
  children,
  initialPosition,
  index
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStartPos.current.x,
        y: e.clientY - dragStartPos.current.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <WindowContainer
      style={{
        left: position.x,
        top: position.y,
        zIndex: isDragging ? 1000 : index
      }}
      isDragging={isDragging}
    >
      <WindowHeader onMouseDown={handleMouseDown}>
        {title}
      </WindowHeader>
      <WindowContent>
        {children}
      </WindowContent>
    </WindowContainer>
  );
}; 