import Banner from "./banner/Banner.js";

const AdvertisementBanner = {
    addComponent: () => addComponent(),
};

const addComponent = () => {
    const content = createDOM();

    return content;
};

const createDOM = () => {
    const data = getData();
    const banner = Banner.create({...data});

    return banner;
};

const getData = () => {
    const adData = {
        adName: "Title 1",
        adImageUrl: "https://dummyimage.com/600x400/aaaaaa/f2f2f2.jpg",
        adRedirectUrl: "/products"
    };
    return adData;
}

export default AdvertisementBanner;