import './App.css';
import TodoList from './TodoList.jsx';

const todoList = [
  {
    id: 1,
    title: 'Study React Components',
  },
  {
    id: 2,
    title: 'Review Array Map Method',
  },
  {
    id: 3,
    title: 'Complete One More Video-Based Course from Tree House',
  }
];

const App = () => {

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function(item) {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
      <TodoList />
    </>
  );
}

export default App;
