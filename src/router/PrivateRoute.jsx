// src/router/PrivateRoute.jsx

import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('authToken'); // Check if the user is authenticated

    return isAuthenticated ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;