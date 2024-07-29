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
- That code would go inside of the declaration for the handleAddTodo function, inside of the AddToDoForm.jsx, if we needed to use Vanilla JavaScript. Yet, as Roy Mosby mentioned, "useState provides both a state value and a function to update that state value." So, this code is unecessary and has been replaced with a call to that "function to update that state value." So, now, we are using the following code inside of the eclaration for the handleAddTodo function, instead:
  setTodoTitle("");
