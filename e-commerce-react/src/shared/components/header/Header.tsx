import { Link } from "react-router-dom";
import './header.css';
import APP_PATHS from "../../../constants/routeConstants";

const Header = () => {
    return (
        <>
            <header className="app-header">
                <div className="app-logo">
                    <Link to={APP_PATHS.HOME.PATH}>{APP_PATHS.HOME.TITLE}</Link>
                </div>
                <div className="main-menu">
                    <Link to={APP_PATHS.PRODUCTS.PATH}>{APP_PATHS.PRODUCTS.TITLE}</Link>
                </div>
                <div className="user-menu">
                    <Link to={APP_PATHS.CART.PATH}>{APP_PATHS.CART.TITLE}</Link>
                    <Link to={APP_PATHS.ORDERS.PATH}>{APP_PATHS.ORDERS.TITLE}</Link>
                    <Link to={APP_PATHS.LOGIN.PATH}>{APP_PATHS.LOGIN.TITLE}</Link>
                </div>
            </header>
        </>
    );
};

export default Header;