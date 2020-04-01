import React from 'react'

function FunctionClick() {

   const handleEvent = () => {
        console.log('click')
    }

    return (
        <div>
            <button onClick={handleEvent}>click</button>
        </div>
    )
}

export default FunctionClick
