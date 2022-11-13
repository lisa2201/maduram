import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const HomeComponent = Loadable(lazy(() => import('views/common/home')));
const GallaryComponent = Loadable(lazy(()=> import ('views/common/Gallary')));
const ContactComponent = Loadable(lazy(()=> import ('views/common/Contact')));
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <HomeComponent />
        },
        {
            path: '/pages/login/login3',
            element: <AuthLogin3 />
        },
        {
            path: '/pages/register/register3',
            element: <AuthRegister3 />
        },
        {
            path: '/home',
            element: <HomeComponent />
        },
        {
            path: '/contact',
            element: <ContactComponent />
        },
        {
            path: '/gallary',
            element: <GallaryComponent />
        }
    ]
};

export default AuthenticationRoutes;
