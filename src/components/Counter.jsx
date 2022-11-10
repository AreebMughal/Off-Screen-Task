import React, { useContext, useState } from 'react';
import { CounterContex } from '../App';

const Counter = () => {
    const { counter, setCounter } = useContext(CounterContex)

    const handleIncrement = (e) => {
        setCounter(counter + 1);
    }

    const handleDecrement = (e) => {
        setCounter(counter - 1);
    }

    return (
        <div className='card p-3 m-3 bg-secondary'>
            <div className='section ms-3 mt-3'>
                <button
                    className="btn btn-sm btn-danger me-5 ps-3 pe-3"
                    onClick={handleDecrement}
                >
                    -
                </button>
                {counter}
                <button
                    className="btn btn-sm btn-primary ms-5 ps-3 pe-3"
                    onClick={handleIncrement}
                >
                    +
                </button>


            </div>
        </div>
    );
}

export default Counter;
