const initialState = {
    display: false,
    projects: [],
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY':
            return {
                ...initialState,
                display: action.payload
            }
        case 'PROJECTS':
            return {
                ...initialState,
                projects: action.payload
            }
        default:
            return state
    }
} 