import Login from '../pages/login'
import Loading from '../pages/loading'
import App from '../App'
import React from "react";

interface route {
    path: string,
    component: React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined
}

const routes: Array<route> = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/loading",
        component: Loading,
    },
    {
        path: "/",
        component: App
    },
    {
        path: "*",
        component: Login
    },
]
export default routes
