import TodoListItem from "./TodoListItem.jsx";

const TodoList = (props) => {
  let todoLi = props.todoList;
  return (
      <ul>
          {todoLi.map(function(item) {
              return (
                <TodoListItem key={item.id} todo={item.title}/>
              );
          })}
      </ul>
  );
};

export default TodoList;