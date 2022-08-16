import Cart from './pages/Cart';
import PLP from './pages/PLP';
import Auth from './pages/Auth';
import PDP from './pages/PDP';
import PageError from './pages/PageError';

export const authRoutes = [
    {
        path: '/cart',
        element: <Cart/>,
    },
];
export const publicRoutes = [
    {
        path: '/',
        element: <PLP category="" />,
    },
    {
        path: '/coins',
        element: <PLP category="coins"/>,
    },
    {
        path: '/bondes',
        element: <PLP category="bondes"/>,
    },
    {
        path: '/authorization',
        element: <Auth/>,
    },
    {
        path: '/goods/:id',
        element: <PDP/>,
    },
    {
        path: '/*',
        element: <PageError/>,
    },
];