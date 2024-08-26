import { Outlet } from 'react-router-dom'
import './App.css'
import useRouteChange from './hooks/useRouteChange'

function App() {
  useRouteChange()

  return (
    <div className='app'>
      <Outlet/>
    </div>
  )
}

export default App
