import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home/HomePage.js";
import SearchPage from "./pages/Search/SearchPage";
import DetailsPage from "./pages/Details/DetailsPage.js";
import Route from "./pages/Route.js";
import {DetailsLoader} from "./pages/Details/DetailsLoader";
import {SearchLoader} from "./pages/Search/SearchLoader";
import {HomeLoader} from "./pages/Home/HomeLoader";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Route />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader: HomeLoader,
            },
            {
                path: '/search',
                element: <SearchPage />,
                loader: SearchLoader,
            },
            {
                path: '/packages/:name',
                element: <DetailsPage />,
                loader: DetailsLoader,
            }
        ]
    }
]);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
