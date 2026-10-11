import styled from 'styled-components';
import { Menu } from '@/components/Menu';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  background: #1A1A1A;
`;

const WelcomeTitle = styled.h1`
  color: #00FFB3;
  font-size: 32px;
  margin-bottom: 20px;
`;

const WelcomeText = styled.p`
  color: #B3B3B3;
  font-size: 18px;
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const DemoButton = styled.button`
  background: none;
  border: 2px solid #00FFB3;
  color: #00FFB3;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #FFFFFF;
    color: #FFFFFF;
  }
`;

export default function Home() {
  return (
    <>
      <Menu />
      <WelcomeContainer>
        <WelcomeTitle>Добро пожаловать в Trade+Plus</WelcomeTitle>
        <WelcomeText>
          Спасибо за интерес к демо версии Trade+Plus. 
          Желаем вам веселого исследования, успехов в торгах 
          и мы всегда будем рады общению!
        </WelcomeText>
        <DemoButton>Забрать демо бонус 100</DemoButton>
      </WelcomeContainer>
    </>
  );
} 