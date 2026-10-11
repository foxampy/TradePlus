import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const WindowContainer = styled.div<{ isMinimized: boolean; zIndex: number; isDragging: boolean }>`
  position: absolute;
  border: 2px solid #00FFB3;
  border-radius: 8px;
  background: #1A1A1A;
  min-width: 300px;
  min-height: 200px;
  transition: all 0.3s;
  display: ${props => props.isMinimized ? 'none' : 'block'};
  z-index: ${props => props.zIndex};
  resize: both;
  overflow: hidden;
  cursor: ${props => props.isDragging ? 'grabbing' : 'grab'};
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar-track {
    background: #1A1A1A;
  }

  &::-webkit-scrollbar-thumb {
    background: #FF6EC7;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #FF8ED7;
  }

  &::-webkit-scrollbar-corner {
    background: #1A1A1A;
  }
`;

const MinimizedCard = styled.div<{ zIndex: number; index: number }>`
  position: fixed;
  bottom: 20px;
  left: ${props => 20 + props.index * 200}px;
  background: #1A1A1A;
  border: 2px solid #00FFB3;
  border-radius: 4px;
  padding: 10px;
  color: #00FFB3;
  cursor: pointer;
  transition: all 0.3s;
  z-index: ${props => props.zIndex};
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    border-color: #FFFFFF;
    color: #FFFFFF;
  }
`;

const WindowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #00FFB3;
  color: #1A1A1A;
  border-radius: 6px 6px 0 0;
  cursor: move;
  user-select: none;
`;

const WindowTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const WindowControls = styled.div`
  display: flex;
  gap: 10px;
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: #1A1A1A;
  cursor: pointer;
  font-size: 16px;
  padding: 0 5px;
`;

const WindowContent = styled.div`
  padding: 20px;
  height: calc(100% - 40px);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

interface DraggableWindowProps {
  title: string;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  index?: number;
}

export const DraggableWindow: React.FC<DraggableWindowProps> = ({
  title,
  children,
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 300, height: 200 },
  index = 0
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [zIndex, setZIndex] = useState(100);
  const windowRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === windowRef.current?.firstChild) {
      setIsDragging(true);
      dragStartPos.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y
      };
    }
    setZIndex(1000);
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

  const handleResize = (e: MouseEvent) => {
    if (windowRef.current) {
      const newWidth = windowRef.current.offsetWidth;
      const newHeight = windowRef.current.offsetHeight;
      
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const targetWidth = screenWidth / 6;
      const targetHeight = screenHeight / 6;
      
      if (Math.abs(newWidth - targetWidth) < 20 && Math.abs(newHeight - targetHeight) < 20) {
        setSize({
          width: targetWidth,
          height: targetHeight
        });
      } else {
        setSize({
          width: newWidth,
          height: newHeight
        });
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    window.addEventListener('mousemove', handleResize);
    return () => window.removeEventListener('mousemove', handleResize);
  }, []);

  return (
    <>
      {isMinimized ? (
        <MinimizedCard 
          zIndex={zIndex}
          index={index}
          onClick={() => setIsMinimized(false)}
        >
          <span>{title}</span>
          <ControlButton onClick={(e) => {
            e.stopPropagation();
            setIsMinimized(false);
          }}>
            ✕
          </ControlButton>
        </MinimizedCard>
      ) : (
        <WindowContainer
          ref={windowRef}
          style={{
            left: position.x,
            top: position.y,
            width: size.width,
            height: size.height,
            transform: isDragging ? 'scale(1.02)' : 'scale(1)'
          }}
          isMinimized={isMinimized}
          zIndex={zIndex}
          isDragging={isDragging}
          onMouseDown={handleMouseDown}
        >
          <WindowHeader>
            <WindowTitle>{title}</WindowTitle>
            <WindowControls>
              <ControlButton onClick={() => setIsMinimized(!isMinimized)}>
                {isMinimized ? '▢' : '▁'}
              </ControlButton>
              <ControlButton>✕</ControlButton>
            </WindowControls>
          </WindowHeader>
          <WindowContent>{children}</WindowContent>
        </WindowContainer>
      )}
    </>
  );
}; 