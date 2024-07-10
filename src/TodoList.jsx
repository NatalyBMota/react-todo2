import TodoListItem from "./TodoListItem.jsx";

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

const TodoList = () => {
  return (
      <ul>
          {todoList.map(function(item) {
              return (
                <TodoListItem key={item.id} todo={item.title}/>
              );
          })}
      </ul>
  );
};

export default TodoList;