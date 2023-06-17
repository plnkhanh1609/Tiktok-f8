import DefaultLayout from '~/components/Layouts/DefaultLayout';
import { HeaderOnly } from '~/components/Layouts';
import { Following, Home, Upload, Profile, ErrorPage } from '~/pages';
import routes from '~/config/routes';
const publicRoutes = [
    {
        path: '/',
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: routes.home,
                element: <Home />,
            },
            {
                path: routes.following,
                element: <Following />,
            },
            {
                path: routes.profile,
                element: <Profile />,
            },
        ],
    },
    {
        path: routes.upload,
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
