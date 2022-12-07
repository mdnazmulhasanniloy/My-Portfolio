import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Service from "../Pages/Service/Service";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,

            },
            {
                path: '/About',
                element: <About />

            },
            {
                path: '/Service',
                element: <Service />

            },
            {
                path: '/Portfolio',
                element: <Portfolio />

            },
        ]
    }
])