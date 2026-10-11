import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { DraggableWindow } from '../DraggableWindow';

const HistoryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TradeList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  padding: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const TradeRow = styled.div<{ type: 'buy' | 'sell'; isNew?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: ${props => props.type === 'buy' ? 'rgba(0, 255, 179, 0.1)' : 'rgba(255, 110, 199, 0.1)'};
  border-left: 2px solid ${props => props.type === 'buy' ? '#00FFB3' : '#FF6EC7'};
  color: ${props => props.type === 'buy' ? '#00FFB3' : '#FF6EC7'};
  transform: ${props => props.isNew ? 'scale(1.05)' : 'scale(1)'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    background: ${props => props.type === 'buy' ? 'rgba(0, 255, 179, 0.2)' : 'rgba(255, 110, 199, 0.2)'};
  }
`;

const Time = styled.span`
  opacity: 0.6;
`;

const Price = styled.span`
  font-weight: bold;
`;

const Amount = styled.span`
  opacity: 0.8;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #00FFB3;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: rgba(0, 255, 179, 0.1);
  border-radius: 4px;
  margin: 10px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const StatValue = styled.span`
  color: #00FFB3;
  font-weight: bold;
`;

const StatLabel = styled.span`
  font-size: 12px;
  opacity: 0.8;
`;

interface TradeHistoryWindowProps {
  index?: number;
}

export const TradeHistoryWindow: React.FC<TradeHistoryWindowProps> = ({ index = 0 }) => {
  const [trades, setTrades] = useState([
    { time: '14:30:25', price: 52000, amount: 0.5, type: 'buy' as const },
    { time: '14:29:58', price: 51900, amount: 1.2, type: 'sell' as const },
    { time: '14:29:45', price: 51800, amount: 0.8, type: 'buy' as const },
    { time: '14:29:30', price: 51700, amount: 2.0, type: 'sell' as const },
    { time: '14:29:15', price: 51600, amount: 1.5, type: 'buy' as const },
    { time: '14:29:00', price: 51500, amount: 0.3, type: 'sell' as const },
  ]);

  const [newTrades, setNewTrades] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPrice = 51500 + Math.random() * 500;
      const randomAmount = Math.random() * 2;
      const type = Math.random() > 0.5 ? 'buy' : 'sell';
      
      const newTrade = {
        time: new Date().toLocaleTimeString('ru-RU', { hour12: false }),
        price: Math.round(randomPrice),
        amount: Number(randomAmount.toFixed(2)),
        type: type as 'buy' | 'sell'
      };

      setTrades(prev => [newTrade, ...prev].slice(0, 50));
      setNewTrades(prev => [...prev, 0]);
      setTimeout(() => {
        setNewTrades(prev => prev.filter(i => i !== 0));
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const stats = {
    totalTrades: trades.length,
    buyTrades: trades.filter(t => t.type === 'buy').length,
    sellTrades: trades.filter(t => t.type === 'sell').length,
    totalVolume: trades.reduce((sum, t) => sum + t.amount, 0).toFixed(2)
  };

  return (
    <DraggableWindow
      title="История торгов"
      initialPosition={{ x: 1490, y: 50 }}
      initialSize={{ width: 400, height: 600 }}
      index={index}
    >
      <HistoryContainer>
        <Header>
          <span>Время</span>
          <span>Цена</span>
          <span>Объем</span>
        </Header>
        <Stats>
          <StatItem>
            <StatValue>{stats.totalTrades}</StatValue>
            <StatLabel>Всего сделок</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{stats.buyTrades}</StatValue>
            <StatLabel>Покупок</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{stats.sellTrades}</StatValue>
            <StatLabel>Продаж</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{stats.totalVolume}</StatValue>
            <StatLabel>Объем (BTC)</StatLabel>
          </StatItem>
        </Stats>
        <TradeList>
          {trades.map((trade, i) => (
            <TradeRow key={i} type={trade.type} isNew={newTrades.includes(i)}>
              <Time>{trade.time}</Time>
              <Price>${trade.price.toLocaleString()}</Price>
              <Amount>{trade.amount} BTC</Amount>
            </TradeRow>
          ))}
        </TradeList>
      </HistoryContainer>
    </DraggableWindow>
  );
}; 