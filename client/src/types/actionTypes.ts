export interface RouteChangeActionPayload {
    pathname: string
}

export interface RouteChangeAction {
    type: 'ROUTE_CHANGE'
    payload: RouteChangeActionPayload
}