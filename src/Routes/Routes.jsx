import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";

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
                loader:  () =>  fetch("https://raw.githubusercontent.com/adittacse/bottles-data/refs/heads/main/AppsData.json").then(res => res.json()),
                element: <Apps></Apps>
            }
        ]
    },
]);

export default router;
