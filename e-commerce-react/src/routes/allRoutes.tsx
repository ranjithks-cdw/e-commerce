import {lazy} from 'react';

import APP_PATHS from '../constants/routeConstants';
import { getFeatures } from '../utils/pageUtils';

const Home = lazy(() => import('../pages/home/Home'));
const Products = lazy(() => import("../pages/products/Products"));
const ProductDescrptionPage = lazy(() => import("../pages/pdp/ProductDescriptionPage"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const Orders = lazy(() => import("../pages/orders/Orders"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const Login = lazy(() => import("../pages/login/Login"));


const allRoutes = [
    {path: APP_PATHS.HOME.PATH, element: <Home />, loader: (() => getFeatures('home'))},
    {path: APP_PATHS.PRODUCTS.PATH, element: <Products />},
    {path: APP_PATHS.PRODUCT_DESCRIPTION.PATH, element: <ProductDescrptionPage />},
    {path: APP_PATHS.CART.PATH, element: <Cart />},
    {path: APP_PATHS.ORDERS.PATH, element: <Orders />},
    {path: APP_PATHS.PROFILE.PATH, element: <Profile />},
    {path: APP_PATHS.LOGIN.PATH, element: <Login />},
];

export default allRoutes;