import React from 'react';
import styled from 'styled-components';
import { DraggableWindow } from '../DraggableWindow';

const StatusContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section = styled.div`
  background: #2A2A2A;
  border-radius: 8px;
  padding: 15px;
`;

const SectionTitle = styled.h4`
  color: #00FFB3;
  margin: 0 0 15px 0;
  font-size: 14px;
`;

const ActiveTradesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TradeItem = styled.div<{ type: 'buy' | 'sell' }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: ${props => props.type === 'buy' ? 'rgba(0, 255, 179, 0.1)' : 'rgba(255, 110, 199, 0.1)'};
  border-radius: 4px;
  border-left: 3px solid ${props => props.type === 'buy' ? '#00FFB3' : '#FF6EC7'};
`;

const TradeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TradePair = styled.span`
  font-weight: bold;
  color: #00FFB3;
`;

const TradeDetails = styled.span`
  font-size: 12px;
  opacity: 0.8;
`;

const TradeProfit = styled.span<{ isPositive: boolean }>`
  color: ${props => props.isPositive ? '#00FFB3' : '#FF6EC7'};
  font-weight: bold;
`;

const InvestmentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InvestmentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(0, 255, 179, 0.1);
  border-radius: 4px;
  border-left: 3px solid #00FFB3;
`;

const InvestmentName = styled.span`
  font-weight: bold;
  color: #00FFB3;
`;

const InvestmentValue = styled.span`
  color: #00FFB3;
`;

interface WalletStatusWindowProps {
  index?: number;
}

export const WalletStatusWindow: React.FC<WalletStatusWindowProps> = ({ index = 0 }) => {
  const activeTrades = [
    { pair: 'BTC/USDT', type: 'buy' as const, entry: 52000, current: 52500, amount: 0.5 },
    { pair: 'ETH/USDT', type: 'sell' as const, entry: 3000, current: 2950, amount: 2 },
  ];

  const investments = [
    { name: 'Bitcoin ETF', value: 25000, change: '+5.2%' },
    { name: 'Ethereum Staking', value: 15000, change: '+3.8%' },
    { name: 'DeFi Pool', value: 10000, change: '+2.1%' },
  ];

  return (
    <DraggableWindow
      title="Состояние"
      initialPosition={{ x: 50, y: 670 }}
      initialSize={{ width: 400, height: 400 }}
      index={index}
    >
      <StatusContainer>
        <Section>
          <SectionTitle>Активные сделки</SectionTitle>
          <ActiveTradesList>
            {activeTrades.map((trade, i) => (
              <TradeItem key={i} type={trade.type}>
                <TradeInfo>
                  <TradePair>{trade.pair}</TradePair>
                  <TradeDetails>
                    Вход: ${trade.entry.toLocaleString()} | Текущая: ${trade.current.toLocaleString()}
                  </TradeDetails>
                </TradeInfo>
                <TradeProfit isPositive={trade.current > trade.entry}>
                  {((trade.current - trade.entry) / trade.entry * 100).toFixed(2)}%
                </TradeProfit>
              </TradeItem>
            ))}
          </ActiveTradesList>
        </Section>

        <Section>
          <SectionTitle>Инвестиции</SectionTitle>
          <InvestmentsList>
            {investments.map((investment, i) => (
              <InvestmentItem key={i}>
                <InvestmentName>{investment.name}</InvestmentName>
                <InvestmentValue>
                  ${investment.value.toLocaleString()} ({investment.change})
                </InvestmentValue>
              </InvestmentItem>
            ))}
          </InvestmentsList>
        </Section>
      </StatusContainer>
    </DraggableWindow>
  );
}; 