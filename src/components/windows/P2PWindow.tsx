import React from 'react';
import styled from 'styled-components';
import { DraggableWindow } from './DraggableWindow';

const P2PContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #1A1A1A;
  border: 1px solid #00FFB3;
  border-radius: 8px;
  padding: 15px;
  color: #B3B3B3;
`;

const MarketStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  color: #00FFB3;
  font-size: 18px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
`;

const DealList = styled.div`
  height: calc(100% - 60px);
  overflow-y: auto;
`;

const DealItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #333;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const DealInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DealPrice = styled.div`
  color: #00FFB3;
  font-weight: bold;
`;

const DealVolume = styled.div`
  color: #666;
  font-size: 12px;
`;

const DealType = styled.div<{ type: 'buy' | 'sell' }>`
  color: ${props => props.type === 'buy' ? '#00FFB3' : '#FF6EC7'};
  font-weight: bold;
`;

const P2PWindow: React.FC<{ index: number }> = ({ index }) => {
  const deals = [
    { id: 1, type: 'buy', price: '52,000', volume: '0.5 BTC', time: '2 мин назад' },
    { id: 2, type: 'sell', price: '52,100', volume: '1.2 BTC', time: '5 мин назад' },
    { id: 3, type: 'buy', price: '51,900', volume: '0.8 BTC', time: '8 мин назад' },
    { id: 4, type: 'sell', price: '52,200', volume: '0.3 BTC', time: '10 мин назад' },
    { id: 5, type: 'buy', price: '51,800', volume: '1.5 BTC', time: '15 мин назад' },
  ];

  return (
    <DraggableWindow
      title="P2P Рынок"
      initialPosition={{ x: 50, y: 50 }}
      index={index}
    >
      <P2PContainer>
        <MarketStats>
          <StatItem>
            <StatValue>52,000</StatValue>
            <StatLabel>Средняя цена</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>4.3 BTC</StatValue>
            <StatLabel>Объем за 24ч</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>12</StatValue>
            <StatLabel>Активные сделки</StatLabel>
          </StatItem>
        </MarketStats>
        <DealList>
          {deals.map(deal => (
            <DealItem key={deal.id}>
              <DealInfo>
                <DealPrice>${deal.price}</DealPrice>
                <DealVolume>{deal.volume} • {deal.time}</DealVolume>
              </DealInfo>
              <DealType type={deal.type}>
                {deal.type === 'buy' ? 'Покупка' : 'Продажа'}
              </DealType>
            </DealItem>
          ))}
        </DealList>
      </P2PContainer>
    </DraggableWindow>
  );
};

export default P2PWindow; 