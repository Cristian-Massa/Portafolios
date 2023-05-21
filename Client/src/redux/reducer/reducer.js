const initialState = {
    landing: true,
    redirection: '',
    modalActive: false,
    projects: [],
    toggleProjects: 'Mostrar todo'
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
            return {
                ...state,
                modalActive: action.payload
            }

        case "PROJECTS":
            return {
                ...state,
                projects: action.payload
            }
        case "TOGGLEPROJECTS":
            return {
                ...state,
                toggleProjects: action.payload
            }
        default:
            return state
    }
}