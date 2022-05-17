import {InferActionsTypes} from "../Redux-store";

export type   authStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean

}
let initialState: authStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: authStateType = initialState, action: ActionsType): authStateType => {
    switch (action.type) {

        case 'GET-AUTH-DATA':
            return {
                ...state,
                id: Number(action.id),
                login: action.login,
                email: action.email,
                isAuth: true
            }

        default:
            return state
    }
}


type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    getAuth: (id: string, login: string, email: string) => ({type: 'GET-AUTH-DATA', id, login, email} as const)
}

