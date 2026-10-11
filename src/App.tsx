import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AccountPage } from './pages/AccountPage';
import PlusPage from './pages/plus';
import { Menu } from './components/Menu';

// Временные компоненты для новых страниц
const TempPage = ({ title }: { title: string }) => (
  <div style={{ color: '#B3B3B3', padding: '20px' }}>
    <h1>{title}</h1>
    <p>Страница в разработке</p>
  </div>
);

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<AccountPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/plus" element={<PlusPage />} />
        
        {/* Аккаунт */}
        <Route path="/wallets" element={<TempPage title="Кошельки" />} />
        <Route path="/messages" element={<TempPage title="Сообщения" />} />
        <Route path="/contacts" element={<TempPage title="Контакты" />} />
        
        {/* Торговля */}
        <Route path="/trade" element={<TempPage title="Торговля" />} />
        <Route path="/p2p" element={<TempPage title="P2P" />} />
        <Route path="/staking" element={<TempPage title="Стейкинг" />} />
        <Route path="/exchanges" element={<TempPage title="Биржи" />} />
        
        {/* Инвестиции */}
        <Route path="/ico" element={<TempPage title="ICO" />} />
        <Route path="/airdrops" element={<TempPage title="Аирдропы" />} />
        <Route path="/crowdfunding" element={<TempPage title="Краундфайдинг" />} />
        
        {/* Обучение */}
        <Route path="/education" element={<TempPage title="Курсы" />} />
        <Route path="/streams" element={<TempPage title="Стримы" />} />
        <Route path="/analytics" element={<TempPage title="Аналитика" />} />
        
        {/* Дополнительно */}
        <Route path="/settings" element={<TempPage title="Настройки" />} />
        <Route path="/help" element={<TempPage title="Помощь" />} />
        <Route path="/about" element={<TempPage title="О нас" />} />
      </Routes>
    </>
  );
};

export default App; 