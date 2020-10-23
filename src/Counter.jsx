import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
const Counter = ()=>{
    const [count,setcount]=useState(0)
    const increment=()=>{
        setcount(count + 1)
    }
    const decrement=()=>{
        count===0?(
            alert('y0u cant count below 0')
        ):(
            setcount(count - 1 )
        )
    }
    return (
        <>
            <div className='container'>
                <div className='counter'>
                    <div className='value'>
                        <h3>{count}</h3>
                    </div>
                    <div className='buttons'>
                        <Button className='ibtn btn' onClick={increment}>
                            <PlusOneIcon className='plus icon' style={{fontSize:'36px'}}/>
                        </Button>
                        <Button className='rbtn btn' onClick={decrement}>
                            <ExposureNeg1Icon className='mins icon' style={{fontSize:'36px'}}/>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter;