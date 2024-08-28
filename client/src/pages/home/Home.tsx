import { TextInput } from '@mantine/core'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'

const Home = () => {
  const recipes = useSelector((state: RootState) => state.recipes)
  console.log(recipes)
  return (
    <div>
      home
      <TextInput
      label="Floating label input"
      
    />
    </div>
  )
}

export default Home