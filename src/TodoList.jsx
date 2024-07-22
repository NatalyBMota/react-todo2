import TodoListItem from "./TodoListItem.jsx";

const TodoList = ({todoList}) => {
  console.log("TodoList mounted");
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