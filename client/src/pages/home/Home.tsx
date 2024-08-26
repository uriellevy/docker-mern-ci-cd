import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'

const Home = () => {
  const recipes = useSelector((state: RootState) => state.recipes)
  console.log(recipes)
  return (
    <div>Home</div>
  )
}

export default Home