import './styles.css';
import ThemeContextProvider from './context/ThemeContextProvider';
import Home from './screens/Home';

export default function App() {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
}
