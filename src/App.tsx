import { useState } from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>سلام خره!</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          من خرم {count}
        </button>
      </div>
      <div className='card'>
        <button onClick={() => WebApp.showAlert(`${count} : میزان خریت من `)}>
          Show Alert...
        </button>
      </div>
    </>
  )
}

export default App
