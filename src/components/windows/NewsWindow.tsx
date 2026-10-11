import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { DraggableWindow } from './DraggableWindow';

const NewsContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #1A1A1A;
  border: 1px solid #00FFB3;
  border-radius: 8px;
  padding: 15px;
  color: #B3B3B3;
  overflow: hidden;
`;

const slideUp = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  90% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100%); opacity: 0; }
`;

const NewsBlock = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 45%;
  background: #333;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(100%)'};
  transition: all 0.5s ease;
`;

const NewsTitle = styled.h3`
  color: #00FFB3;
  margin: 0 0 10px 0;
  font-size: 16px;
`;

const NewsContent = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
`;

const NewsTime = styled.div`
  color: #666;
  font-size: 12px;
  margin-top: 10px;
`;

const NewsWindow: React.FC<{ index: number }> = ({ index }) => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const news = [
    {
      title: 'Bitcoin достиг нового максимума',
      content: 'Криптовалюта Bitcoin установила новый исторический максимум, достигнув отметки в $52,000.',
      time: '2 минуты назад'
    },
    {
      title: 'Ethereum 2.0 успешно обновлен',
      content: 'Сеть Ethereum успешно завершила переход на версию 2.0, что значительно улучшило масштабируемость.',
      time: '15 минут назад'
    },
    {
      title: 'Новый рекорд DeFi',
      content: 'Общая стоимость заблокированных средств в DeFi превысила $100 миллиардов.',
      time: '30 минут назад'
    },
    {
      title: 'Крупная инвестиция в NFT',
      content: 'Известный коллекционер приобрел NFT за $10 миллионов, установив новый рекорд.',
      time: '1 час назад'
    },
    {
      title: 'Регуляторы о криптовалютах',
      content: 'Центральные банки обсуждают новые правила регулирования криптовалютного рынка.',
      time: '2 часа назад'
    },
    {
      title: 'Новый проект в экосистеме',
      content: 'Анонсирован запуск нового проекта, который обещает революцию в области DeFi.',
      time: '3 часа назад'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNewsIndex((prev) => (prev + 2) % news.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DraggableWindow
      title="Новости"
      initialPosition={{ x: 350, y: 50 }}
      index={index}
    >
      <NewsContainer>
        <NewsBlock isVisible={isVisible}>
          <NewsTitle>{news[currentNewsIndex].title}</NewsTitle>
          <NewsContent>{news[currentNewsIndex].content}</NewsContent>
          <NewsTime>{news[currentNewsIndex].time}</NewsTime>
        </NewsBlock>
        <NewsBlock isVisible={isVisible}>
          <NewsTitle>{news[(currentNewsIndex + 1) % news.length].title}</NewsTitle>
          <NewsContent>{news[(currentNewsIndex + 1) % news.length].content}</NewsContent>
          <NewsTime>{news[(currentNewsIndex + 1) % news.length].time}</NewsTime>
        </NewsBlock>
      </NewsContainer>
    </DraggableWindow>
  );
};

export default NewsWindow; 