import { useState } from 'react'
import Binder  from './component/Binder'
import './App.css'

function App() {
  return (
    <>
      <main>
        <div className='h-30 w-full bg-green-200'>
          <h1>cardBinder</h1>
        </div>
        <div>
          <Binder />
        </div>
      </main>
    </>
  )
}

export default App
