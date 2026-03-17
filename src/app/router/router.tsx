import { Navigate, replace, type RouteObject } from "react-router-dom";

import { AUTH_TYPES, ROUTE_PATH } from "./routesPath";
import { HomePage } from "@pages/HomePage";
import { CoursesPage } from "@pages/CoursesPage/ui/CoursesPage";

import { DetailsCoursePage } from "@pages/DetailsCoursePage/ui/DetailsCoursePage";
import { AuthPage } from "@pages/AuthPage/AuthPage";



interface RouteMeta {
    title?: string;
    description?: string;
}

interface AppRoute extends Omit<RouteObject, 'children'> {
    meta?: RouteMeta;
};


export const routes: AppRoute[] = [
    {
        path: ROUTE_PATH.HOME,
        element: <HomePage />,
        meta: {title: 'home page'},
    },
    {
        path: ROUTE_PATH.COURSES,
        element: <CoursesPage/>,
        meta: {title: 'all courses page'},
    },
    {
        path: ROUTE_PATH.COURSE_DETAILS,
        element: <DetailsCoursePage/>,
        meta: {title: 'course details page'},
    },
    {
        path: ROUTE_PATH.AUTH,
        element: <AuthPage/>,
        meta: {title: 'auth page'}
    }, 
    {
        path: '/auth',
        element: <Navigate to={`/auth/${AUTH_TYPES.LOGIN}`} replace/>
    }
]