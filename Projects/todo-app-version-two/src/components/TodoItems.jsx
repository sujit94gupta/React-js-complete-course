import React from 'react';
import TodoItem from './TodoItem.jsx';
import styles from './TodoItems.module.css';

const TodoItems = ({ todoItem }) => {
    return (
        <div className={styles.itemContainer}>
            {todoItem.map((item, index) => (
                <TodoItem key={index} todoName={item.name} todoDate={item.date} />
            ))}

        </div>
    );
}

export default TodoItems;