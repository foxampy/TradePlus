import React, { createContext, useContext, useEffect, useState } from 'react';

interface TelegramContextType {
  webApp: any;
  user: any;
  initData: string;
}

const TelegramContext = createContext<TelegramContextType>({
  webApp: null,
  user: null,
  initData: '',
});

export const useTelegram = () => useContext(TelegramContext);

export const TelegramProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [webApp, setWebApp] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [initData, setInitData] = useState<string>('');

  useEffect(() => {
    // Проверяем, что код выполняется на клиенте
    if (typeof window !== 'undefined') {
      // Динамически импортируем WebApp только на клиенте
      import('@twa-dev/sdk').then(({ default: WebApp }) => {
        setWebApp(WebApp);
        setUser(WebApp.initDataUnsafe.user || null);
        setInitData(WebApp.initData);
        WebApp.ready();
      });
    }
  }, []);

  return (
    <TelegramContext.Provider value={{ webApp, user, initData }}>
      {children}
    </TelegramContext.Provider>
  );
}; 