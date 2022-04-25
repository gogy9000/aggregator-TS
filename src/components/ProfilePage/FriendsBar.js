import s from "./ProfilePage.module.css";
import {NavItem} from "../NavBar/NavItem/NavItem";
import {NavLink} from "react-router-dom";
import {avaPhoto} from "../../photo/photo";

export const FriendsBar = (props) => {


   const  friends =props.state.users.map(user=><div key={user.id} className={s.avaBlock}>

        <img className={s.img}
             src={avaPhoto}
             alt="gamer"/>
        <NavLink to={`/profile/${user.id}`}>
            <div onClick={props.callBack} className={s.nickName}>{user.name}</div>
        </NavLink>
    </div>)


    return (
        <div className={s.FriendsBar}>
            <NavItem elementName={'friends'} to={'/friends'}/>
            <div className={s.FriendsBarContent}>
            <>{friends}</>
            </div>
        </div>)

}