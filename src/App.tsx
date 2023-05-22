import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import Button from "./components/Button/Button";

type CountObjType = {
    countObj: CountObjectType
}
type CountObjectType =  {
    initialCount: number
    reset: number
    maxCount: number
    disabledIncrease: boolean
    disabledReset: boolean
}
const App: React.FC<CountObjType> = (
    {
        countObj
    }
) => {

    let [start, setStart] = useState<number>(countObj.initialCount)

    const addCount = () => {
        let increase = start + 1;
        setStart(increase);
    }
    const resetСounter = () => {
        setStart(countObj.reset);
    }
    countObj.disabledIncrease = start === countObj.maxCount
    countObj.disabledReset = start === countObj.initialCount

    return (
        <div className="App">
            <div className="app__wrapper">
                <Counter counter={start} color={countObj.disabledIncrease}/>
                <div className="Buttom__box">
                    <Button disabled={countObj.disabledIncrease} count={addCount}>
                        incr
                    </Button>
                    <Button disabled={countObj.disabledReset} count={resetСounter}>
                        reset
                    </Button>
                </div>
            </div>

        </div>
    );
}

export default App;
