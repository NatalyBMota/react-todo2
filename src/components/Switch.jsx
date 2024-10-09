import { Routes, Route } from 'react-router-dom';
import TodoContainer from './TodoContainer.jsx';
import LandingPage from './LandingPage.jsx';

const Switch = () => {
    const tableName = import.meta.env.VITE_TABLE_NAME; 
    return (
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
    );
};

export default Switch;