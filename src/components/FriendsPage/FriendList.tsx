import React, {useState} from "react";
import {FriendDescriptionBlock} from "./FriendDescriptionBlock";
import {stateProfilePageType, thunkProfile, UserObjectType,} from "../../Redux/ProfilePage/ProfilePageReducer";
import {useDispatch} from "react-redux";
import {UserDataType} from "../../Api/Api";

type FriendListType = {
    state: stateProfilePageType
}

export const FriendList: React.FC<FriendListType> = ({state}) => {

    const mappedUsers = state.users.map((user: UserDataType) => <MappedUsers key={user.id} user={user}/>)

    return <div>{mappedUsers}</div>
}


type MappedUsersPropsType = { user: UserDataType }

export const MappedUsers: React.FC<MappedUsersPropsType> = ({user}) => {

    const [isFetchingRequest, setIsFetchingRequest] = useState(false)
    const dispatch=useDispatch()

    const follow = () => dispatch(thunkProfile.follow(user.id,setIsFetchingRequest))

    const unFollow = () => dispatch(thunkProfile.unFollow(user.id,setIsFetchingRequest))

    return (
        <FriendDescriptionBlock key={user.id}
                                user={user}
                                isFetchingRequest={isFetchingRequest}
                                follow={follow}
                                unfollow={unFollow}/>)
}