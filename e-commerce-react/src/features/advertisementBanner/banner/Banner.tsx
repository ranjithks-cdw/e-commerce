import { adBannerType } from "../types/adBannerTypes";

const Banner = (props: adBannerType) => {
    const {adImageUrl, adName, adRedirectUrl} = props;

    return ( 
        <a href={adRedirectUrl}>
            <div className="advertisement-banner">
                <img src={adImageUrl} alt={adName} />
            </div>
        </a>
     );
}
 
export default Banner;