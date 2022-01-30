import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
    itemText: string;
    id: string;
    removeTodo: (id: string) => void;
}> = ({ itemText, id, removeTodo }) => {
    return (
        <li className={classes.item} onClick={removeTodo.bind(this, id)}>
            {itemText}
        </li>
    );
};
export default TodoItem;
