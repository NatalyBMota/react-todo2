import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer.jsx';

const App = () => { 
  
  const tableName = import.meta.env.VITE_TABLE_NAME;
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={
          <TodoContainer tableName={tableName} />
        }>
        </Route>
        <Route path="/landing" exact element={
          <h1>Landing Page</h1>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
