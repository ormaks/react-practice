import { ComponentType } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Home } from 'Pages/Home'
import { FloorPlans } from 'Pages/FloorPlans'
import { Contact } from 'Pages/Contact'
import { Facts } from 'Pages/Facts'

interface Route {
    link: string
    title: string
    component: ComponentType<RouteComponentProps<any>> | ComponentType<any>
}

export const Pages: Array<Route> = [
    {
        link: '/',
        title: 'Home',
        component: Home,
    },
    {
        link: '/floor-plans',
        title: 'Floor Plans',
        component: FloorPlans,
    },
    {
        link: '/contact',
        title: 'Contact',
        component: Contact,
    },
    {
        link: '/facts',
        title: 'Facts',
        component: Facts,
    },
]