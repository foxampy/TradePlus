import styled from 'styled-components';

export const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: none;
  border: 2px solid #00FFB3;
  color: #00FFB3;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  z-index: 1000;
  transition: all 0.3s;

  &:hover {
    border-color: #FFFFFF;
    color: #FFFFFF;
  }
`;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${props => props.isOpen ? '0' : '-300px'};
  width: 300px;
  height: 100vh;
  background: #1A1A1A;
  border-right: 2px solid #00FFB3;
  transition: left 0.3s ease;
  z-index: 999;
  padding: 80px 20px 20px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #00FFB3 #1A1A1A;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1A1A1A;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00FFB3;
    border-radius: 4px;
  }
`;

export const MenuSection = styled.div`
  margin-bottom: 30px;
`;

export const MenuTitle = styled.h3`
  color: #00FFB3;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const MenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: none;
  border: 2px solid #B3B3B3;
  color: #B3B3B3;
  text-align: left;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #FFFFFF;
    color: #FFFFFF;
  }
`;

export const PlusButton = styled(MenuItem)`
  border-color: #00FFB3;
  color: #00FFB3;
  font-weight: bold;
  margin-bottom: 30px;

  &:hover {
    border-color: #FFFFFF;
    color: #FFFFFF;
  }
`; 