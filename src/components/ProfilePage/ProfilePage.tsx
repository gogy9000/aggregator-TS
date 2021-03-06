import s from "./ProfilePage.module.css";
import {ProfileSidebarCompose} from "./ProfileSidebar";
import {ProfileContent} from "./ProfileContent";
import React from "react";

type ProfilePage = {}

export const ProfilePage: React.FC<ProfilePage> = () => {
    return (
        <div className={s.ProfilePage}>
            <div className={s.ProfileSidebar}>
                <ProfileSidebarCompose/>
            </div>
            <div className={s.ProfileContent}>
                <ProfileContent/>
            </div>

        </div>
    )

}