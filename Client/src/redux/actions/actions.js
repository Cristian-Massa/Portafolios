export const DISPLAY = "DISPLAY"
export const PROJECTS = "PROJECTS"


export function display (boolean) {
    return{
        type: DISPLAY,
        payload: boolean
    }
}

export function projects(projects) {
    return{
        type: PROJECTS,
        payload: projects
    }
}