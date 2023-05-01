export const LANDINGCLICK = "LANDINGCLICK"
export const REDIRECTION = "REDIRECTION"
export const MODAL = "MODAL"

export const landingClick = (boolean) =>({
        type: LANDINGCLICK,
        payload: boolean
    }
)
export const redirection = (text) =>({
     type: REDIRECTION,
     payload: text
})

export const modal = (boolean) =>({
    type: MODAL,
    payload: boolean
})