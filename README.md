# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- An alternate to the following line of code:
  const newTodoTitle = todoInput.value;
- This is it:
  const newTodoTitle = event.target.value;

- The following code is the Vanilla JavaScript way of clearing the form field once the "Add" button has been clicked:
  const todoInput = document.querySelector("input");
  todoInput.value = "";
- That code would go inside of the declaration for the handleAddTodo function, inside of the AddToDoForm.jsx, if we needed to use Vanilla JavaScript. Yet, as Roy Mosby mentioned, "useState provides both a state value and a function to update that state value." So, this code is unecessary and has been replaced with a call to that "function to update that state value." So, now, we are using the following code inside the declaration for the handleAddTodo function, instead:
  setTodoTitle("");

- At the top of the useSemiPersistentState function declaration on App.jsx, I was previously using short-circuit evaluation, through the following line of code:
  let [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
- I am now using the nullish coalescing operator instead. Both work, but I just learned about the latter, so I decided to use it. The new code looks like this:
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) ?? []);
- In Roy Mosby's comments in my pull request for lesson 1.4, he mentioned that "React needs to be able to track all of the components that it renders and uses key={todo.id} to do so." He also mentioned that "React will be giving" me "a warning about" the "list items;" which are created through the TodoListItem function, in the TodoListItem.jsx file; "not having an id." That is because, my code for that function was previously returning the following line of code:
<li>{todo}</li>
- I believe that I fixed this issue by having the TodoListItem function return the following line of code instead:
<li key={todo.id}>{todo}</li>
