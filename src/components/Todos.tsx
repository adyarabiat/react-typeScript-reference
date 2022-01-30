import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = ({
    items,
    removeTodo,
}) => {
    // so if the items are array of strings we could add <{ items: string[] }>
    // but in this case when we are using class we can add it like this  <{ items: Todo[] }> import the calss

    return (
        <ul className={classes.todos}>
            {items.map((item) => (
                <TodoItem
                    key={item.id}
                    itemText={item.text}
                    id={item.id}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
};

export default Todos;
