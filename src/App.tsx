import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>E aí, fala tu</h1>
    </ThemeProvider>
  );
}
