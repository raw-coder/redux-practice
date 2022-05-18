import React, {useState} from "react";

const TodoItem = React.memo(function TodoItem({todo, onToggle}) {
    return (
        <div>
            <li
                style={{textDecoration: todo.done ? 'line-through' : 'none'}}
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
            </li>
        </div>
    );
});

const TodoList = React.memo(function TodoList({todos, onToggle}) {
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>
                ))}
            </ul>
        </div>
    );
});

function Todos({todos, onCreate, onToggle}) {
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={text}
                    placeholder="fill todos"
                    onChange={onChange}
                />
                <button type="submit">Register</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle}/>
        </div>
    )
}

export default Todos;