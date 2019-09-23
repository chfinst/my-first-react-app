import React, {useState} from 'react';

function Counter() {

    // first element is used to retrieve curent state, second is used to set current state.
    const [count, setCount] = useState(0);

    return (
            <div className="counter">
                <button className="btn btn-decrement">-</button>
                <span className="count">NA</span>
                <button className="btn btn-increment">+</button>
            </div>
    )
}

export default Counter