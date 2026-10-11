import React from 'react';
import styled from 'styled-components';
import P2PWindow from '../components/windows/P2PWindow';
import WalletWindow from '../components/windows/WalletWindow';
import { TeacherStreamWindow } from '../components/windows/TeacherStreamWindow';
import { QuotesWindow } from '../components/windows/QuotesWindow';
import NewsWindow from '../components/windows/NewsWindow';
import ToDoWindow from '../components/windows/ToDoWindow';

const PlusContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1A1A1A;
  position: relative;
  overflow: hidden;
`;

const PlusPage: React.FC = () => {
  return (
    <PlusContainer>
      <P2PWindow index={0} />
      <WalletWindow index={1} />
      <TeacherStreamWindow index={2} />
      <QuotesWindow index={3} />
      <NewsWindow index={4} />
      <ToDoWindow index={5} />
    </PlusContainer>
  );
};

export default PlusPage; 