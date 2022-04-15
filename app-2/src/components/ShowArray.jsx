import React from 'react'

function ShowArray(props){
    let array = props.list;

    return(
        <div>
            {array.map((item) => {
                return <p>{item}</p>
            })}
        </div>
    )
}

export default ShowArray;