import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #1A1A1A;
    color: #B3B3B3;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    --bg-primary: #1A1A1A;
    --bg-glass: rgba(0, 0, 0, 0.8);
    --text-primary: #FFFFFF;
    --text-secondary: #B3B3B3;
    --neon-pink: #FF6EC7;
    --neon-mint: #00FFB3;
    --border-radius: 8px;
    --transition: 0.3s;
  }

  .glass-effect {
    background: var(--bg-glass);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .neon-border {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, var(--neon-pink), var(--neon-mint));
      border-radius: calc(var(--border-radius) + 2px);
      z-index: -1;
      opacity: 0.5;
      animation: neonPulse 2s infinite;
    }
  }

  @keyframes neonPulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.5;
    }
  }

  .hover-glow {
    transition: all var(--transition);
    
    &:hover {
      filter: brightness(1.2);
      transform: translateY(-2px);
    }
  }
`; 