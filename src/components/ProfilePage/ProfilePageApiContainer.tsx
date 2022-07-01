import React from "react";
import {ProfilePage} from "./ProfilePage";

import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {withRouter} from "../../hoc/WithRouter";
import {compose} from "redux";


export class ProfilePageApiContainer extends React.Component<any, any> {


    componentDidMount() {

    }
    render() {
        return (

            <ProfilePage />
        )
    }


}

const mapStateToProps = (state: AppStateType) => (

    {state: state.profilePage})


let withRouterDataUrl = withRouter(ProfilePageApiContainer)

export default connect(mapStateToProps)(withRouterDataUrl)


