const initialState = {
    landing: true,
    redirection: '',
    modalActive: false
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
        default:
            return state
    }
}