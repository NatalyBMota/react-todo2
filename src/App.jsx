import './App.css';
import Switch from './components/Switch.jsx';
import { BrowserRouter } from 'react-router-dom';

const App = () => {    
  return (
    <BrowserRouter>
      <Switch />
    </BrowserRouter>
  );
};

export default App;
