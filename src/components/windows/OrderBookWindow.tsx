import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { DraggableWindow } from '../DraggableWindow';

const OrderBookContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OrderList = styled.div`
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

const OrderRow = styled.div<{ type: 'buy' | 'sell'; isNew?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 8px;
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

const Price = styled.span`
  font-weight: bold;
`;

const Amount = styled.span`
  opacity: 0.8;
`;

const Total = styled.span`
  opacity: 0.6;
`;

const DepthBar = styled.div<{ type: 'buy' | 'sell'; width: number }>`
  position: absolute;
  height: 100%;
  width: ${props => props.width}%;
  background: ${props => props.type === 'buy' ? 'rgba(0, 255, 179, 0.1)' : 'rgba(255, 110, 199, 0.1)'};
  right: ${props => props.type === 'sell' ? '0' : 'auto'};
  z-index: -1;
  transition: width 0.3s ease;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #00FFB3;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Spread = styled.div`
  text-align: center;
  padding: 10px;
  color: #00FFB3;
  font-weight: bold;
  background: rgba(0, 255, 179, 0.1);
  border-radius: 4px;
  margin: 10px;
`;

interface OrderBookWindowProps {
  index?: number;
}

export const OrderBookWindow: React.FC<OrderBookWindowProps> = ({ index = 0 }) => {
  const [orders, setOrders] = useState([
    { price: 52000, amount: 0.5, total: 26000, type: 'sell' as const },
    { price: 51900, amount: 1.2, total: 62280, type: 'sell' as const },
    { price: 51800, amount: 0.8, total: 41440, type: 'sell' as const },
    { price: 51700, amount: 2.0, total: 103400, type: 'buy' as const },
    { price: 51600, amount: 1.5, total: 77400, type: 'buy' as const },
    { price: 51500, amount: 0.3, total: 15450, type: 'buy' as const },
  ]);

  const [newOrders, setNewOrders] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPrice = 51500 + Math.random() * 500;
      const randomAmount = Math.random() * 2;
      const type = Math.random() > 0.5 ? 'buy' : 'sell';
      
      const newOrder = {
        price: Math.round(randomPrice),
        amount: Number(randomAmount.toFixed(2)),
        total: Math.round(randomPrice * randomAmount),
        type: type as 'buy' | 'sell'
      };

      setOrders(prev => {
        const newOrders = [...prev, newOrder]
          .sort((a, b) => b.price - a.price)
          .slice(0, 20);
        return newOrders;
      });

      setNewOrders(prev => [...prev, orders.length]);
      setTimeout(() => {
        setNewOrders(prev => prev.filter(i => i !== orders.length));
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [orders.length]);

  const maxTotal = Math.max(...orders.map(o => o.total));

  return (
    <DraggableWindow
      title="Книга ордеров"
      initialPosition={{ x: 1070, y: 50 }}
      initialSize={{ width: 400, height: 600 }}
      index={index}
    >
      <OrderBookContainer>
        <Header>
          <span>Цена</span>
          <span>Объем</span>
          <span>Всего</span>
        </Header>
        <Spread>
          Спред: {(orders.find(o => o.type === 'sell')?.price || 0) - (orders.find(o => o.type === 'buy')?.price || 0)} USDT
        </Spread>
        <OrderList>
          {orders.map((order, i) => (
            <OrderRow key={i} type={order.type} isNew={newOrders.includes(i)}>
              <DepthBar type={order.type} width={(order.total / maxTotal) * 100} />
              <Price>${order.price.toLocaleString()}</Price>
              <Amount>{order.amount} BTC</Amount>
              <Total>${order.total.toLocaleString()}</Total>
            </OrderRow>
          ))}
        </OrderList>
      </OrderBookContainer>
    </DraggableWindow>
  );
}; 