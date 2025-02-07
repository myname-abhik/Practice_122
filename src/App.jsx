import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Page_1 } from './Pages/Page_1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Page_1/>
    </>
  )
}

export default App
