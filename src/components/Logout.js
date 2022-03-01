﻿import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();

    if (isAuthenticated) {
        return (<button onClick={() => logout({returnTo: window.location.origin})}>
                Log Out
            </button>);
    }

    return <></>;
};

export default LogoutButton;