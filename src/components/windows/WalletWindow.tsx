import React from 'react';
import styled from 'styled-components';
import { DraggableWindow } from './DraggableWindow';

const WalletContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #1A1A1A;
  border: 1px solid #00FFB3;
  border-radius: 8px;
  padding: 15px;
  color: #B3B3B3;
`;

const AssetSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  color: #00FFB3;
  margin-bottom: 10px;
  font-size: 16px;
`;

const AssetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AssetItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #333;
  border-radius: 4px;
`;

const AssetInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AssetIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #00FFB3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AssetName = styled.div`
  font-weight: bold;
`;

const AssetAmount = styled.div`
  color: #00FFB3;
  font-weight: bold;
`;

const NFTItem = styled(AssetItem)`
  background: linear-gradient(45deg, #00FFB3, #FF6EC7);
`;

const WalletWindow: React.FC<{ index: number }> = ({ index }) => {
  const assets = {
    tokens: [
      { name: 'TRD', amount: '100', icon: 'T' },
      { name: 'BTC', amount: '0', icon: 'B' },
      { name: 'ETH', amount: '0', icon: 'E' },
    ],
    nft: [
      { name: 'MultyPass', amount: '1', icon: 'M' },
    ],
    staking: [
      { name: 'TRD Staking', amount: '0', icon: 'S' },
    ],
    futures: [
      { name: 'BTC/USDT', amount: '0', icon: 'F' },
    ],
    portfolio: [
      { name: 'Инвест. портфель', amount: '0', icon: 'P' },
    ],
  };

  return (
    <DraggableWindow
      title="Кошелек"
      initialPosition={{ x: 200, y: 50 }}
      index={index}
    >
      <WalletContainer>
        <AssetSection>
          <SectionTitle>Токены</SectionTitle>
          <AssetList>
            {assets.tokens.map(asset => (
              <AssetItem key={asset.name}>
                <AssetInfo>
                  <AssetIcon>{asset.icon}</AssetIcon>
                  <AssetName>{asset.name}</AssetName>
                </AssetInfo>
                <AssetAmount>{asset.amount}</AssetAmount>
              </AssetItem>
            ))}
          </AssetList>
        </AssetSection>

        <AssetSection>
          <SectionTitle>NFT</SectionTitle>
          <AssetList>
            {assets.nft.map(asset => (
              <NFTItem key={asset.name}>
                <AssetInfo>
                  <AssetIcon>{asset.icon}</AssetIcon>
                  <AssetName>{asset.name}</AssetName>
                </AssetInfo>
                <AssetAmount>{asset.amount}</AssetAmount>
              </NFTItem>
            ))}
          </AssetList>
        </AssetSection>

        <AssetSection>
          <SectionTitle>Стейкинг</SectionTitle>
          <AssetList>
            {assets.staking.map(asset => (
              <AssetItem key={asset.name}>
                <AssetInfo>
                  <AssetIcon>{asset.icon}</AssetIcon>
                  <AssetName>{asset.name}</AssetName>
                </AssetInfo>
                <AssetAmount>{asset.amount}</AssetAmount>
              </AssetItem>
            ))}
          </AssetList>
        </AssetSection>

        <AssetSection>
          <SectionTitle>Фьючерсы</SectionTitle>
          <AssetList>
            {assets.futures.map(asset => (
              <AssetItem key={asset.name}>
                <AssetInfo>
                  <AssetIcon>{asset.icon}</AssetIcon>
                  <AssetName>{asset.name}</AssetName>
                </AssetInfo>
                <AssetAmount>{asset.amount}</AssetAmount>
              </AssetItem>
            ))}
          </AssetList>
        </AssetSection>

        <AssetSection>
          <SectionTitle>Инвест. портфель</SectionTitle>
          <AssetList>
            {assets.portfolio.map(asset => (
              <AssetItem key={asset.name}>
                <AssetInfo>
                  <AssetIcon>{asset.icon}</AssetIcon>
                  <AssetName>{asset.name}</AssetName>
                </AssetInfo>
                <AssetAmount>{asset.amount}</AssetAmount>
              </AssetItem>
            ))}
          </AssetList>
        </AssetSection>
      </WalletContainer>
    </DraggableWindow>
  );
};

export default WalletWindow; 