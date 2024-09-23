import { Link } from "react-router-dom";
import TodoList from './components/TodoList.jsx';
import AddTodoForm from './components/AddTodoForm.jsx';
import styles from './styles/App.module.css';
import checkListImg from './assets/checklist.svg';

const TodoContainer = ({ addTodo, isLoading, todoList, removeTodo }) => {
    return (
        <>
            <nav>
              <Link to="/new" alt="Click here to create a new todo list.">New Todo List</Link>
              <Link to="https://icons8.com/icons/set/favicon" target="_blank" title="Where I got my fav (or favorite) icon from.">Fav Icons</Link>
            </nav>
            <main>
              <section>
                <h1>Todo List</h1>
                <AddTodoForm onAddTodo={addTodo} />
                {isLoading ? (<p>Loading...</p>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
              </section>
              <section>
                <img src={checkListImg} alt="Checklist." className={styles.checkListImg} />             
              </section>
            </main>
          </>
    );
};

export default TodoContainer;