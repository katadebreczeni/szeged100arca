import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const clickHandler = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <input onClick={clickHandler} type="button" value="Add"/>
            <p>{count}</p>
        </div>
    )
}

export default Counter
