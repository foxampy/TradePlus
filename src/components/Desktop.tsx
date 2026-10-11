import styled from 'styled-components';
import { ChartWindow } from './windows/ChartWindow';
import { OrderBookWindow } from './windows/OrderBookWindow';
import { TradeHistoryWindow } from './windows/TradeHistoryWindow';
import { AIAnalyzerWindow } from './windows/AIAnalyzerWindow';
import { WalletWindow } from './windows/WalletWindow';
import { WalletStatusWindow } from './windows/WalletStatusWindow';

const DesktopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #1A1A1A;
  position: relative;
  overflow: hidden;
`;

const WindowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;

export const Desktop: React.FC = () => {
  return (
    <DesktopContainer>
      <WindowGrid>
        <ChartWindow index={0} />
        <OrderBookWindow index={1} />
        <TradeHistoryWindow index={2} />
        <AIAnalyzerWindow index={3} />
        <WalletWindow index={4} />
        <WalletStatusWindow index={5} />
      </WindowGrid>
    </DesktopContainer>
  );
}; 