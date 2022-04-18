import React from 'react';

function NewTask(props){
    const {getTaskFn, submitTaskFn} = props;
    return(
        <div>
            <input onChange={getTaskFn}></input>
            <button onClick={submitTaskFn}>Add Item</button>
        </div>
    )
}

export default NewTask;