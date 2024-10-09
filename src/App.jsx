import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import Switch from './components/Switch.jsx';
import styles from './styles/App.module.css';
import './styles/App.css';

const App = () => {    
  return (
    <BrowserRouter>
      <nav>
          <Link to="/" alt="Render a todo list that can be edited." className={styles.navLink}>Todo List</Link>
          <Link to="/landing" alt="Go to the landing page." className={styles.navLink}>Landing Page</Link>
      </nav>
      <Switch />
      <footer>
          <Link to="https://icons8.com/icons/set/favicon" target="_blank" title="Where I got my fav (or favorite) icon from." className={styles.footerLink}>Fav Icons</Link>
      </footer>
    </BrowserRouter>
  );
};

export default App;
