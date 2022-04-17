import React, {useState} from 'react'

function Image(props){
    const imageURL = props.link;
    console.log(props.link);
    return(
        <div>
            <img src={imageURL}></img>
        </div>
    )
}

export default Image;