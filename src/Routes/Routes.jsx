import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";

const dataPromise = fetch("/data.json").then(res => res.json());

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                path: "/",
                // loader: fetch("/data.json").then(res => res.json()),
                element: <Home dataPromise={dataPromise}></Home>
            },
            {
                path: "apps",
                element: <p>Apps page</p>
            }
        ]
    },
]);

export default router;
