import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { DraggableWindow } from '../DraggableWindow';

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Chart = styled.div`
  width: 100%;
  height: 400px;
  background: #2A2A2A;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding: 20px;
`;

const GridLine = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 1px;
  left: 0;
`;

const PriceLabel = styled.div`
  position: absolute;
  right: 10px;
  color: #00FFB3;
  font-size: 12px;
  transform: translateY(-50%);
`;

const TimeLabel = styled.div`
  position: absolute;
  bottom: 10px;
  color: #00FFB3;
  font-size: 12px;
  transform: translateX(-50%);
`;

const Candle = styled.div<{ isUp: boolean; height: number; left: number }>`
  position: absolute;
  width: 8px;
  height: ${props => props.height}px;
  left: ${props => props.left}px;
  bottom: 50%;
  background: ${props => props.isUp ? '#00FFB3' : '#FF6EC7'};
  border-radius: 2px;
  transform: translateY(50%);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(50%) scale(1.2);
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Button = styled.button<{ isActive?: boolean }>`
  background: ${props => props.isActive ? '#00FFB3' : '#2A2A2A'};
  border: 1px solid #00FFB3;
  color: ${props => props.isActive ? '#1A1A1A' : '#00FFB3'};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #00FFB3;
    color: #1A1A1A;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: rgba(26, 26, 26, 0.9);
  border: 1px solid #00FFB3;
  border-radius: 4px;
  padding: 8px;
  color: #00FFB3;
  font-size: 12px;
  pointer-events: none;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s;
`;

interface ChartWindowProps {
  index?: number;
}

export const ChartWindow: React.FC<ChartWindowProps> = ({ index = 0 }) => {
  const [timeframe, setTimeframe] = useState('1D');
  const [hoveredCandle, setHoveredCandle] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const generateCandles = () => {
    const candles = [];
    for (let i = 0; i < 50; i++) {
      const isUp = Math.random() > 0.5;
      const height = Math.random() * 100 + 50;
      candles.push({
        isUp,
        height,
        left: i * 15,
        price: isUp ? 52000 + Math.random() * 1000 : 52000 - Math.random() * 1000,
        volume: Math.random() * 10
      });
    }
    return candles;
  };

  const [candles, setCandles] = useState(generateCandles());

  useEffect(() => {
    const interval = setInterval(() => {
      setCandles(generateCandles());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCandleHover = (index: number, event: React.MouseEvent) => {
    setHoveredCandle(index);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <DraggableWindow
      title="График"
      initialPosition={{ x: 50, y: 50 }}
      initialSize={{ width: 1000, height: 600 }}
      index={index}
    >
      <ChartContainer>
        <Chart>
          {Array.from({ length: 5 }).map((_, i) => (
            <GridLine key={i} style={{ top: `${i * 25}%` }} />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <PriceLabel key={i} style={{ top: `${i * 25}%` }}>
              ${(52000 + (4 - i) * 500).toLocaleString()}
            </PriceLabel>
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <TimeLabel key={i} style={{ left: `${i * 25}%` }}>
              {['00:00', '06:00', '12:00', '18:00', '24:00'][i]}
            </TimeLabel>
          ))}
          {candles.map((candle, i) => (
            <Candle
              key={i}
              isUp={candle.isUp}
              height={candle.height}
              left={candle.left}
              onMouseEnter={(e) => handleCandleHover(i, e)}
              onMouseLeave={() => setHoveredCandle(null)}
            />
          ))}
          {hoveredCandle !== null && (
            <Tooltip
              style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                opacity: 1
              }}
            >
              <div>Цена: ${candles[hoveredCandle].price.toLocaleString()}</div>
              <div>Объем: {candles[hoveredCandle].volume.toFixed(2)} BTC</div>
            </Tooltip>
          )}
        </Chart>
        <Controls>
          <Button isActive={timeframe === '1H'} onClick={() => setTimeframe('1H')}>1H</Button>
          <Button isActive={timeframe === '4H'} onClick={() => setTimeframe('4H')}>4H</Button>
          <Button isActive={timeframe === '1D'} onClick={() => setTimeframe('1D')}>1D</Button>
          <Button isActive={timeframe === '1W'} onClick={() => setTimeframe('1W')}>1W</Button>
        </Controls>
      </ChartContainer>
    </DraggableWindow>
  );
}; 