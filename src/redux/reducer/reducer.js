const initialState = {
    landing: true,
    redirection: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LANDINGCLICK":
            return {
                ...state,
                landing: false
            }
        case "REDIRECTION":
            return {
                ...state,
                redirection: action.payload
            }
        default:
            return state
    }
}