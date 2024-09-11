import { createTheme, MantineProvider } from '@mantine/core';
import AppLayout from './components/appLayout/AppLayout';

function App() {
  const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    defaultRadius: 'md',
  });


  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme='dark'>
        <div className='app'>
          <AppLayout/>
        </div>
      </MantineProvider>
    </>
  )
}

export default App
