import React from 'react';


function ShowText(){
    const [stringVal, setVal] = React.useState('');

    function getText(event){
        setVal(event.target.value);
    }
    return(
        <div>
            <input onChange={getText}></input><br></br>
            <span>{stringVal}</span>
        </div>
    )
}

export default ShowText;