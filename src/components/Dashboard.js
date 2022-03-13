﻿import React, {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {connect} from 'react-redux'
import Loader from "./navigation/Loader";
import * as actionCreators from "../store/actionCreators/roleActionCreator";
import SideBar from "./qualityAssurance/SideBar";
import DeveloperSidebar from "./developer/DeveloperSidebar";

const mapStateToProps = (state) => {
    return {
        role: state.roleReducer.role
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetRole: (role) => dispatch(actionCreators.setRole(role))
    }
}

function Dashboard(props) {
    const {getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        getAccessToken().catch(console.error);
    })

    const getAccessToken = async () => {
        const token = await getAccessTokenSilently({
            audience: "https://dev-eyvtzgck.us.auth0.com/api/v2/",
            scope: "read:current_user",
        });
        const jwtDecoded = JSON.parse(atob(token.split('.')[1]));
        const roleDecoded = jwtDecoded["https://www.jasonpaff.dev/roles"][0];
        props.onSetRole(roleDecoded);
    }

    switch (props.role) {
        case "admin":
            return (
                <></>
            )
        case "customer":
            return (
                <SideBar/>
            )
        case "staff":
            return (
                <DeveloperSidebar/>
            )
        default:
            return (
                <Loader/>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);