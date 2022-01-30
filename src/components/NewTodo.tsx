import { useRef } from 'react';
import classes from './NewTodo.module.css';

// so here we are reciving a function as prop
// so we provid the shape of this function
// this function accept string and the reteurn  viod since we do not wanted it here

const NewTodo: React.FC<{ addTodo: (text: string) => void }> = ({
    addTodo,
}) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        // so here we are using React.FormEvent becouse it is on submitting the form
        // we got also React.MouseEvent that is for onClick

        // if I use React.MouseEvent I will get error on onSubmit on the form so we need to be accurate

        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        addTodo(enteredText);
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
