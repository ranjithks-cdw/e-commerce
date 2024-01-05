import { lazy } from "react";

const ShopByCategories = lazy(() => import("../shopByCategories/ShopByCategories"));
const AdvertisementBanner = lazy(() => import("../advertisementBanner/AdvertisementBanner"));
const AboutUs = lazy(() => import("../aboutUs/AboutUs"));

export const components = {
    ShopByCategories: {component: ShopByCategories},
    AdvertisementBanner: {component: AdvertisementBanner},
    AboutUs: {component: AboutUs},
};