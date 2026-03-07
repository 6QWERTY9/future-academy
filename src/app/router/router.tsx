import type { RouteObject } from "react-router-dom";

import { ROUTE_PATH } from "./routesPath";
import { HomePage } from "@pages/HomePage";
import { CoursesPage } from "@pages/CoursesPage/ui/CoursesPage";
import { DetailsPageLayout } from "@shared/components/DetailsPageLayout";



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
        element: <DetailsPageLayout/>,
        meta: {title: 'course details page'},
    }
]