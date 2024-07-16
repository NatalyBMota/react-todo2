import TodoListItem from "./TodoListItem.jsx";

const TodoList = (props) => {
  let todoLi = props.todoList;
  {console.log("Todo list: ", todoLi)}
  return (
      <ul>
          {todoLi.map(function(item) {
              return (
                <>
                  {console.log("Item id:", item.id, "Item title:", item.title)}
                  <TodoListItem key={item.id} todo={item.title}/>
                </>
              );
          })}
      </ul>
  );
};

export default TodoList;