const todoList2 = [
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
    return <ul>
        <li>{todoList2[0].id}</li>
    </ul>;
};

export default TodoList;