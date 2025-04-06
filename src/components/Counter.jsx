import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <div className='text-center space-y-2 '>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)} className='border-2  border-cyan-800 px-3 py-1.5 rounded-2xl '>Increment</button>
    </div>
  )
}

export default Counter