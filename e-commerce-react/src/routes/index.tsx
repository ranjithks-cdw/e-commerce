import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import Layout from "../shared/components/layout/Layout"
import allRoutes from "./allRoutes"
import Header from "../shared/components/header/Header";
import Footer from "../shared/components/footer/Footer";
const Page404 = lazy(() => import('../pages/page404/Page404'));

const appRoutes = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: (
            <>
                <Header />
                <main>
                    <Page404 />
                </main>
                <Footer />
            </>
        ) ,
        children: allRoutes
    }
]);

export default appRoutes;