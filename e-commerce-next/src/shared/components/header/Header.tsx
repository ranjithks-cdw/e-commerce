import Link from 'next/link';

import PATH_CONSTANTS from '@/constants/pathConstants';

const Header = () => {
    return (
        <>
            <header>
                <Link href={PATH_CONSTANTS.HOME.PATH}>{PATH_CONSTANTS.HOME.TITLE}</Link>
                <Link href={PATH_CONSTANTS.PRODUCTS.PATH}>{PATH_CONSTANTS.PRODUCTS.TITLE}</Link>
                <Link href={PATH_CONSTANTS.ORDERS.PATH}>{PATH_CONSTANTS.ORDERS.TITLE}</Link>
                <Link href={PATH_CONSTANTS.CART.PATH}>{PATH_CONSTANTS.CART.TITLE}</Link>
                <Link href={PATH_CONSTANTS.LOGIN.PATH}>{PATH_CONSTANTS.LOGIN.TITLE}</Link>
            </header>
        </>
    );
};

export default Header;