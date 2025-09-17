import { Route, Routes } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import { Home, Movies, NotFound, Series } from "../pages"
import { PublictRoute } from "./PublicRoute"


const routes = [
    { path: '/', element: <Home /> },
    { path: '/movies', element: <Movies /> },
    { path: '/series', element: <Series /> },

    { path: "*", element: <NotFound /> }
]

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                element={<PublictRoute><MainLayout /></PublictRoute>} >
                {routes.map((item) => (
                    <Route path={item.path} element={item.element} />))}
            </Route>
        </Routes>
    )
}

export default AppRoutes
