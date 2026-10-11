import styled from 'styled-components';
import { Menu } from '@/components/Menu';
import { P2PTradingWindow } from '@/components/windows/P2PTradingWindow';
import { AIAnalyzerWindow } from '@/components/windows/AIAnalyzerWindow';
import { TeacherStreamWindow } from '@/components/windows/TeacherStreamWindow';
import { QuotesWindow } from '@/components/windows/QuotesWindow';
import { NewsWindow } from '@/components/windows/NewsWindow';

const PlusContainer = styled.div`
  padding: 20px;
  margin-top: 60px;
`;

const PlusTitle = styled.h1`
  color: #00FFB3;
  font-size: 32px;
  margin-bottom: 30px;
`;

export default function PlusPage() {
  return (
    <>
      <Menu />
      <PlusContainer>
        <PlusTitle>PLUS</PlusTitle>
        <P2PTradingWindow index={0} />
        <AIAnalyzerWindow index={1} />
        <TeacherStreamWindow index={2} />
        <QuotesWindow index={3} />
        <NewsWindow index={4} />
      </PlusContainer>
    </>
  );
} 