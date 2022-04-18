import React from 'react';

function List(props){
    const {tasks, counter} = props;
    return(
        <div>
            {tasks.map((item, index) => {
                return(
                    <p key={index}><strong>{index + 1}) </strong> {item}</p>
                )
            })}
        </div>
    )
}

export default List;