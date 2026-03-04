export const ROUTE_PATH = {
    HOME: '/',
    COURSES: '/all-courses',
    EVENTS: '/events',
    KNOWLEDGEBASES: '/knowledge-bases',
    CAREERS: '/careers'
} as const;

export type RoutePath = typeof ROUTE_PATH[keyof typeof ROUTE_PATH];