import TodoListItem from "./TodoListItem.jsx";

const TodoList = ({todoList}) => {
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