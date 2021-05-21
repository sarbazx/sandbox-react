import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from '../components/UI/Button';
import classes from './Home.module.css';

function Home() {
  const themeContext = useContext(ThemeContext);
  const clickHandler = (e) => {
    e.preventDefault();
    themeContext.toggleTheme();
  };
  return (
    <div
      className={
        themeContext.settings.theme === 'dark' ? classes.dark : classes.light
      }>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {themeContext.settings.theme}
      <Button onClick={clickHandler}>Toggle</Button>
    </div>
  );
}

export default Home;
