import React from 'react';

function ToDo(props){
    const list = props.list;

    return(
        <div>
            {list.map(item => {
                console.log("hello");
                return(
                    <p key={item}>{item}</p>
                )
            })}
    </div>
    )
}

export default ToDo