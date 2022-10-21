import React from 'react';

let ToDoItem = props => {
    return (
        <div className = 'todoItem'>
            <div className = 'description-wrapper'>
                <p>{props.description}</p>
            </div>
            <div className='input-wrapper'>
                <label>
                <input type='checkbox'
                defaultChecked={props.complete}
                onChange={props.chanEvent}>
                    </input>
                </label>
            </div>
        </div>
    )
}

export default ToDoItem;