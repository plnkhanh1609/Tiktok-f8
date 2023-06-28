import { Following, Home, Upload, Profile, ErrorPage } from '~/pages';
import config from '~/config';
import DefaultLayout, { HeaderOnly } from '~/Layouts';
import Explore from '../Explore';
import Live from '../Live';
const publicRoutes = [
    {
        path: '/',
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: config.routes.home,
                element: <Home />,
            },
            {
                path: config.routes.following,
                element: <Following />,
            },
            {
                path: config.routes.profile,
                element: <Profile />,
            },
            {
                path: config.routes.explore,
                element: <Explore />,
            },
            {
                path: config.routes.live,
                element: <Live />,
            },
        ],
    },
    {
        path: config.routes.upload,
        element: (
            <HeaderOnly>
                <Upload />
            </HeaderOnly>
        ),
        sideBar: null,
    },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
