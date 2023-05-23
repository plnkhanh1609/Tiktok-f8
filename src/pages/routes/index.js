import DefaultLayout from '~/components/Layout/DefaultLayout';
import Following from '../Following';
import Home from '../Home';
import Upload from '../Upload';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'following',
                element: <Following />,
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
