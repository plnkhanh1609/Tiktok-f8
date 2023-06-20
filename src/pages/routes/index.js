
import { Following, Home, Upload, Profile, ErrorPage } from '~/pages';
import config from '~/config';
import DefaultLayout ,{ HeaderOnly } from '~/Layouts';
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
