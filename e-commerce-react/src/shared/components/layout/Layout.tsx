import { Suspense } from "react";
import Header from "../header/Header";
import Loader from "../loader/Loader";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loader />} >
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default Layout;