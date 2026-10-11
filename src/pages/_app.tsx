import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import { TelegramProvider } from '@/contexts/TelegramContext';

const theme = {
  colors: {
    primary: '#00FFB3',
    secondary: '#FF6EC7',
    background: '#1A1A1A',
    text: '#B3B3B3',
  },
};

export default function App({ Component, pageProps }: any) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <TelegramProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </TelegramProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
} 