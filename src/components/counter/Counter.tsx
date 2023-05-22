import React from 'react';
import './Counter.css'

type CounterType = {
    counter: number
    color: boolean
}
export const Counter = (props: CounterType) => {
    let counterColor = props.color ? 'red' : ''
    return (
        <div className={`counter ${counterColor}`}>
            {props.counter}
        </div>
    );
};

