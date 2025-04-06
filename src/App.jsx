import React, {useState} from 'react'
import Header from './components/Header'
import Counter from './components/Counter'

const App = () => {
  const [title, setTitle] = useState("React Sample Debug")
  return (
    <div className='grid place-items-center bg-slate-400/50 h-screen space-y-2'>
      <div>
      <Header title={title}/>
      <Counter/>
      </div>
    </div>
  )
}

export default App