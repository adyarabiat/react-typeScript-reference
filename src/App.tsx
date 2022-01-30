import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (enteredText: string) => {
        console.log(enteredText);

        const newTodo = new Todo(enteredText, new Date().toISOString());
        setTodos((prevState) => {
            return [...prevState, newTodo];
        });
    };

    const removeTodo = (id: string) => {
        setTodos((prevState) => prevState.filter((el) => el.id !== id));
    };
    return (
        <div className="App">
            <NewTodo addTodo={addTodo} />
            <Todos items={todos} removeTodo={removeTodo} />
        </div>
    );
}

export default App;
