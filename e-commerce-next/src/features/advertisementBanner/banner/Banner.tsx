import Link from "next/link";
import Image from "next/image";

import { adBannerType } from "../types/adBannerTypes";

const Banner = (props: adBannerType) => {
    const {adImageUrl, adName, adRedirectUrl} = props;

    return ( 
        <Link href={adRedirectUrl}>
            <div className="advertisement-banner">
                <Image src={adImageUrl} alt={adName} width={0} height={0} sizes="100vw" priority />
            </div>
        </Link>
     );
}
 
export default Banner;