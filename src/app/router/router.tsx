import type { RouteObject } from "react-router-dom";

import { ROUTE_PATH } from "./routesPath";
import { HomePage } from "@pages/HomePage";
import { CoursesPage } from "@pages/CoursesPage/ui/CoursesPage";


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
        element: <CoursesPage/>
    }
]