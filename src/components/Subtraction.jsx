import React, { useContext } from 'react';
import { CounterContex } from '../App';

const Subtraction = () => {
    const fixedValue = 4;
    const { counter } = useContext(CounterContex)

    return (
        <div className='card p-3 m-3'>
            <div className='ms-5'>
                Expression: <br />
                {fixedValue} - {counter > 0 ? counter : '(' + counter + ')'}
            </div>
            <div className='result'>
                <div className='res-value'>
                    Result: {fixedValue - counter}
                </div>
            </div>
        </div>
    );
}

export default Subtraction;
