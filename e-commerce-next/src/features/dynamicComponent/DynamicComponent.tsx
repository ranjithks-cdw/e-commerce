import dynamic from "next/dynamic";
const ShopByCategories = dynamic(() => import("../shopByCategories/ShopByCategories"));
const AdvertisementBanner = dynamic(() => import("../advertisementBanner/AdvertisementBanner"));
const AboutUs = dynamic(() => import("../aboutUs/AboutUs"));

export const components = {
    ShopByCategories: {component: ShopByCategories},
    AdvertisementBanner: {component: AdvertisementBanner},
    AboutUs: {component: AboutUs},
};