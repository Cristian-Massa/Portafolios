export const LANDINGCLICK = "LANDINGCLICK"
export const REDIRECTION = "REDIRECTION"

export const landingClick = (boolean) =>({
        type: LANDINGCLICK,
        payload: boolean
    }
)
export const redirection = (text) =>({
     type: REDIRECTION,
     payload: text
})