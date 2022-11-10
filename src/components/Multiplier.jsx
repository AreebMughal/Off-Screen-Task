import React, { useContext } from 'react';
import { CounterContex } from '../App';

const Multiplier = () => {
    const fixedValue = -5;
    const { counter } = useContext(CounterContex)

    return (
        <div className='card p-3 m-3 bg-danger'>
            <div className='ms-5'>
                Expression: <br />
                {fixedValue} * {counter > 0 ? counter : '(' + counter + ')'}
            </div>
            <div className='result'>
                <div className='res-value'>
                    Result: {fixedValue * counter}
                </div>
            </div>
        </div>
    );
}

export default Multiplier;
