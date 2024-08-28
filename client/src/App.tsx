import { Outlet } from 'react-router-dom'
import useRouteChange from './hooks/useRouteChange'
import { createTheme, MantineProvider } from '@mantine/core';
import AppLayout from './components/appLayout/AppLayout';

function App() {
  useRouteChange()
  const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    defaultRadius: 'md',
  });


  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme='dark'>
        <div className='app'>
          <AppLayout/>
          <Outlet />
        </div>
      </MantineProvider>
    </>
  )
}

export default App
