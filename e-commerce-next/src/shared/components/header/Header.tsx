import Link from 'next/link';
import './header.css';

import PATH_CONSTANTS from '@/constants/pathConstants';

const Header = () => {
    return (
        <>
            <header className="app-header">
                <div className="app-logo">
                    <Link href={PATH_CONSTANTS.HOME.PATH}>{PATH_CONSTANTS.HOME.TITLE}</Link>
                </div>
                <div className="main-menu">
                    <Link href={PATH_CONSTANTS.PRODUCTS.PATH}>{PATH_CONSTANTS.PRODUCTS.TITLE}</Link>
                </div>
                <div className="user-menu">
                    <Link href={PATH_CONSTANTS.ORDERS.PATH}>{PATH_CONSTANTS.ORDERS.TITLE}</Link>
                    <Link href={PATH_CONSTANTS.CART.PATH}>{PATH_CONSTANTS.CART.TITLE}</Link>
                    <Link href={PATH_CONSTANTS.LOGIN.PATH}>{PATH_CONSTANTS.LOGIN.TITLE}</Link>
                </div>
            </header>
        </>
    );
};

export default Header;