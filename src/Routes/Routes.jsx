import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch("/data.json").then(res => res.json()),
                element: <Home></Home>
            },
            {
                path: "apps",
                loader: () => fetch("/data.json").then(res => res.json()),
                element: <Apps></Apps>
            },
            {
                path: "app-details/:id",
                loader: () => fetch("/data.json").then(res => res.json()),
                element: <AppDetails></AppDetails>
            },
            {
                path: "installation",
                loader: () => fetch("/data.json").then(res => res.json()),
                element: <Installation></Installation>
            },
            {
                path: "*",
                element: <NotFoundPage></NotFoundPage>
            }
        ]
    },
]);

export default router;
