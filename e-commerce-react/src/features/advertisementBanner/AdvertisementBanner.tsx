import { useEffect, useState } from 'react';
import Banner from './components/banner/Banner';
import './styles.css';
import { adBannerType } from "./types/adBannerTypes";

const AdvertisementBanner = () => {
    const [adData, setAdData] = useState<adBannerType>();
    
    useEffect(() => {
        const genAdData = () => {
            const adData = {
                adName: "Title 1",
                adImageUrl: "https://dummyimage.com/600x400/aaaaaa/f2f2f2.jpg",
                adRedirectUrl: "/products"
            };
            return adData;
        };

        const bannerData = genAdData();
        setAdData(bannerData);

    },[]);

    return (
        <>
        {adData && <Banner {...adData}/>}
        
        </>
     );
};
 
export default AdvertisementBanner;