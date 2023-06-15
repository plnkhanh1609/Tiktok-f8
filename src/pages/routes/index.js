import DefaultLayout from '~/components/Layouts/DefaultLayout';
import { HeaderOnly } from '~/components/Layouts';
import { Following, Home, Upload, Profile, ErrorPage } from '~/pages';
const publicRoutes = [
    {
        path: '/',
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'following',
                element: <Following />,
            },
            {
                path: 'user/:nickname',
                element: <Profile />,
            },
        ],
    },
    {
        path: 'upload',
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
