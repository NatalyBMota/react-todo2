import TodoListItem from "./TodoListItem.jsx";

const TodoList = ({todoList, onRemoveTodo}) => {
  return (
      <ul>
          {todoList.map(function(item) {
              return (
                <TodoListItem 
                  key={item.id} 
                  id={item.id}
                  todo={item.title} 
                  onRemoveTodo={onRemoveTodo} 
                />
              );
          })}
      </ul>
  );
};

export default TodoList;