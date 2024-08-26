// middleware/routeChangeListener.ts
import { Middleware } from '@reduxjs/toolkit'
import { getAllRecipes } from '../features/recipes/listeners'
import { RouteChangeActionPayload } from '../types/actionTypes'

export const routeChangeListenerMiddleware: Middleware = store => next => (action:any) => {
  console.log('Middleware received action type:', action.type)
  console.log('Middleware received action payload:', action.payload)

  if (action.type === 'ROUTE_CHANGE') {
    const payload: RouteChangeActionPayload = action.payload
    console.log('Middleware payload:', payload)

    if (payload.pathname === '/recipes') {
      console.log('Dispatching getAllRecipes...')
      store.dispatch(getAllRecipes())
    }
  }

  return next(action)
}