import Banner from './banner/Banner';
import './styles.css';
import { adBannerType } from "./types/adBannerTypes";

const AdvertisementBanner = async () => {
    const adData = getBannerData();

    const [bannerData] = await Promise.all([adData]);

    return (
        <Banner {...bannerData}/>
     );
};

const getBannerData = async () => {
    const genAdData = () => {
        const adData = {
            adName: "Title 1",
            adImageUrl: "https://dummyimage.com/600x400/aaaaaa/f2f2f2.jpg",
            adRedirectUrl: "/products"
        };
        return adData;
    };
    
    const adData = genAdData();

    return adData;
}
 
export default AdvertisementBanner;