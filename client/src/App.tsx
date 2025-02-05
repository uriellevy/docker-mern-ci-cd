import AppLayout from './components/appLayout/AppLayout';
import useAuthInitialization from './hooks/useAuthInitialization';

function App() {
  useAuthInitialization();

  return (
    <div className='app'>
      <AppLayout />
    </div>
  )
}

export default App