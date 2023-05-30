import React from 'react';
import Todo from './Todo';

const TodoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className='tasks'>
            {toDoList.map(todo => {
                return (
                    <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button className='completed' style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default TodoList;