import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllRecipes } from '../features/recipes/listeners'

const useRouteChange = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('Current pathname:', location.pathname)
        if (location.pathname === '/') {
            console.log('Current pathname:', location.pathname)
            console.log('Dispatching getAllRecipes...')
            dispatch(getAllRecipes())
          }
    }, [location, dispatch])
}

export default useRouteChange