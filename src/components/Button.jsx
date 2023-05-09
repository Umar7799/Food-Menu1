import React from 'react'
import '../App.css'

const Button = ({getFood}) => {




    return (
        <div className='btnWrapper'>
            <button onClick={getFood} className='foodBtn'>What for dinner</button>
        </div>
    )
}

export default Button