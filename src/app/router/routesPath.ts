export const ROUTE_PATH = {
    HOME: '/',
    COURSES: '/all-courses',
    COURSE_DETAILS: '/all-courses/:category/:courseId', 
    EVENTS: '/events',
    KNOWLEDGEBASES: '/knowledge-bases',
    CAREERS: '/careers',
    AUTH: '/auth/:types'
} as const;

export const AUTH_TYPES = {
    LOGIN: 'login',
    REGISTRATION: 'registration'
}

export type RoutePath = typeof ROUTE_PATH[keyof typeof ROUTE_PATH];