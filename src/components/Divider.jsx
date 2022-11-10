import React, { useContext } from 'react';
import { CounterContex } from '../App';

const Divider = () => {
    const fixedValue = 6;
    const { counter } = useContext(CounterContex)
    console.log(counter);

    return (
        <div className='card p-3 m-3 bg-warning'>
            <div className='ms-5'>
                Expression: <br />
                {fixedValue} / {counter > 0 ? counter : '(' + counter + ')'}
            </div>
            <div className='result'>
                <div className='res-value'>
                    Result: {fixedValue / counter}
                </div>
            </div>
        </div>
    );
}

export default Divider;
