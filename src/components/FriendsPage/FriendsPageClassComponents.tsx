import React from "react";
import {connect} from "react-redux";
import {getAllUsersApi} from "../../Api/Api";
import {FriendsPage} from "./FriendsPage";


class FriendsPageClassComponents extends React.Component<any, any> {


    componentDidMount() {

        getAllUsersApi(this.props.dispatch,)
    }


    render() {

        return (
            <FriendsPage state={this.props.state} dispatch={this.props.dispatch}/>
        )
    }

}

const mapStateToProps = (state: any) => (

    {state: state.profilePage})

export default connect(mapStateToProps)(FriendsPageClassComponents)


