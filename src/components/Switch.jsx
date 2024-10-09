import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import TodoContainer from './TodoContainer.jsx';
import LandingPage from './LandingPage.jsx';
import styles from './Switch.module.css';

const Switch = () => {
    const tableName = import.meta.env.VITE_TABLE_NAME; 
    return (
        <>
            <nav>
                <Link to="/" alt="Render a todo list that can be edited." className={styles.navLink}>Todo List</Link>
                <Link to="/landing" alt="Go to the landing page." className={styles.navLink}>Landing Page</Link>
            </nav>
            <Routes>
                <Route path="/" exact element={
                    <TodoContainer tableName={tableName} />
                }>
                </Route>
                <Route path="/landing" exact element={
                    <LandingPage />
                }>
                </Route>
            </Routes>
            <footer>
                <Link to="https://icons8.com/icons/set/favicon" target="_blank" title="Where I got my fav (or favorite) icon from." className={styles.footerLink}>Fav Icons</Link>
            </footer>
        </>
    );
};

export default Switch;