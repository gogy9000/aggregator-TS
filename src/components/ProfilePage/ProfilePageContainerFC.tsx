import {ProfilePage} from "./ProfilePage";
import React, {useEffect} from "react";
import {Navigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {thunkProfile} from "../../Redux/ProfilePage/ProfilePageReducer";
import {useDispatchApp} from "../../customHooks/CustomHooks";


export const ProfilePageContainerFC =  React.memo( () => {

    let auth = useSelector((state: AppStateType) => state.auth)
    let initApp = useSelector((state: AppStateType) => state.AppReducer)

    const dispatch = useDispatchApp()

    let params = useParams()

    useEffect(() => {
        let userID = params.userId? Number(params.userId):auth.id
        if (!userID) {return}
        dispatch(thunkProfile.getProfile(userID))
        dispatch(thunkProfile.getProfileStatus(userID))
    }, [params.userId])




    return (
        <>
            {
                initApp.isFetching
                    ?
                    <div>LOAD!!</div>
                    :
                    <ProfilePage/>
            }

        </>
    )
}
)


