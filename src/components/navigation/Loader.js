﻿import React from "react";

const Loader = () => {
    const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

    return (
        <div className="loader">
            <img src={loadingImg} alt="loading..."/>
        </div>
    );
};

export default Loader;