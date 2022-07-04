import {AppDispatchType, AppThunk, InferActionsTypes, UnionActionsType} from "../Redux-store";
import {authApi} from "../../Api/Api";
import {actionsApp} from "../AppReducer/AppReducer";

export type   authStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    fakeAuth:boolean

}
let initialState: authStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    fakeAuth:true
}

export const authReducer = (state: authStateType = initialState, action: ActionsAuthType): authStateType => {
    switch (action.type) {

        case 'GET-AUTH-DATA':
            return {
                ...state,
                id: Number(action.id),
                login: action.login,
                email: action.email,
                isAuth: true,
                fakeAuth:true

            }

        default:
            return state
    }
}


export type ActionsAuthType = InferActionsTypes<typeof actionsAuth>

export const actionsAuth = {
    setAuthData: (id: number, login: string, email: string) => ({type: 'GET-AUTH-DATA', id, login, email} as const)
}
export const thunkAuth={
     getAuth : ():AppThunk => async (dispatch:AppDispatchType)=>{
        try {
            const response= await authApi.getAuthApi()
            if (response.data.resultCode!==0){return}
            let {id, login, email}=response.data.data
            dispatch(actionsAuth.setAuthData(id, login, email))
            dispatch(actionsApp.toggleIsFetching(false))
            return response
        }catch (e){
            throw e
        }


    }
}



