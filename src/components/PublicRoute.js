import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "./Auth";

const PublicRoute = ({ children, restricted = false }) => {
    const { currentUser } = useContext(AuthContext);
    const location = useLocation();

    if (currentUser && restricted) {
        // If user is logged in and trying to access restricted public route (like login page)
        return <Navigate to="/home" replace state={{ from: location }} />;
    }

    return children;
};

export default PublicRoute;