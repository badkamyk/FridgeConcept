import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import Nav from './components/Nav'
import Recipes from "./routes/Recipes";
import RecipesDetails from "./routes/RecipesDetails";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page";
import { ContextProvider } from "./Context";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/recipes",
                element: <Recipes />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/recipes/:id",
                element: <RecipesDetails />,
                errorElement: <ErrorPage />,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/*<App/>*/}
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </React.StrictMode>
)
