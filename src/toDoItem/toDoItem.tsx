import { type } from '@testing-library/user-event/dist/type';
import React, {FC, useState} from 'react';

interface todoProps {
    description: string;
    complete: boolean;
    chanEvent: (str: string) => void;
}

let ToDoItem: FC<todoProps> = ({ description, complete, chanEvent }) => {
    
    const[state, setState] = useState ('change event')
    return(
    <div className='todoItem'> 
        <div className='description-wrapper'>
            <p>{description}</p>
        </div>
        <div className='input-wrapper'>
            <label>
                <input type='checkbox'
                    defaultChecked={complete}
                    onChange={() => chanEvent(state)}>
                </input>
                </label>
        </div>
        </div>
    )
}

export default ToDoItem;