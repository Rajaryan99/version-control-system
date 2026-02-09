import React from "react";
import { useNavigate, useRoutes } from 'react-router-dom';
import { useEffect } from "react";


// pages list

import Dashboard from './components/dashboard/Dashboard.jsx'
import Profile from './components/user/Profile.jsx'
import Signup from './components/auth/Signup.jsx';
import Login from './components/auth/Login.jsx'
import Create from "./components/repo/Create.jsx";


//auth Context
import { useAuth } from "./authContext.jsx";

const ProjectRoutes = () => {

    const { currentUser, setCurrentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const userIdFromStorage = localStorage.getItem('userId');

        if (userIdFromStorage && !currentUser) {
            setCurrentUser(userIdFromStorage)
        }

        if (!userIdFromStorage && !['/auth', '/signup'].includes(window.location.pathname)) {
            navigate('/auth')
        }

        if (userIdFromStorage && window.location.pathname == '/auth') {
            navigate('/')
        }
    }, [currentUser, navigate, setCurrentUser])
    
    let element = useRoutes([
        {
            path: '/',
            element: <Dashboard/>
        },
        {
            path: '/auth',
            element: <Login/>
        },
        {
            path: '/signup',
            element: <Signup/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
        {
            path: '/create',
            element: <Create/>
        },
    ])

    return element;
}

export default ProjectRoutes;