import TodoListItem from "./TodoListItem.jsx";

const TodoList = ({todoList}) => {
  console.log("todoList: ", todoList);
  return (
      <ul>
          {todoList.map(function(item) {
              console.log("todo list item.id: ", item.id);
              console.log("todo list item.title: ", item.title);
              return (
                <TodoListItem key={item.id} todo={item.title}/>
              );
          })}
      </ul>
  );
};

export default TodoList;