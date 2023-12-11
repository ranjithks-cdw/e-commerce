import { Link } from "react-router-dom";
import APP_PATHS from "../../../constants/routeConstants";

const Header = () => {
    return (
        <>
            <header>
                <Link to={APP_PATHS.HOME.PATH}>{APP_PATHS.HOME.TITLE}</Link>
                <Link to={APP_PATHS.PRODUCTS.PATH}>{APP_PATHS.PRODUCTS.TITLE}</Link>
                <Link to={APP_PATHS.CART.PATH}>{APP_PATHS.CART.TITLE}</Link>
                <Link to={APP_PATHS.ORDERS.PATH}>{APP_PATHS.ORDERS.TITLE}</Link>
                <Link to={APP_PATHS.LOGIN.PATH}>{APP_PATHS.LOGIN.TITLE}</Link>
            </header>
        </>
    );
};

export default Header;