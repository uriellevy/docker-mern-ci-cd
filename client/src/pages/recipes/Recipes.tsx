import { dummyData } from '../../consts/consts'
import RecipesCard from './components/RecipesCard'
import classes from "./Recipes.module.scss";

const Recipes = () => {
  return (
    <div className={classes.recipesContainer}>
      {dummyData.map((recipe) => (
        <RecipesCard key={recipe._id} recipe={recipe}/>
      ))}
    </div>
  )
}

export default Recipes