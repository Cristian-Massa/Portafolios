const initialState = {
    landing: true,
    redirection: '',
    modalActive: false,
    projects: []
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
        case "MODAL":
            return{
                ...state,
                modalActive: action.payload
            }

            case "PROJECTS":
                return{
                    ...state,
                    projects: action.payload
                }
        default:
            return state
    }
}