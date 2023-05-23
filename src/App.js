import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from './pages/routes';
const router = createBrowserRouter(publicRoutes);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
