import { createElement } from "../../../utils/htmlUtils.js";

const Banner = {
    create: (props) => createDOM(props),
};

const createDOM = (props) => {
    const {adImageUrl, adName, adRedirectUrl} = props;

    const banner = createElement('a', {
        href: adRedirectUrl
    });

    const adBanner = createElement('div', {
        className: 'advertisement-banner'
    });

    const image = createElement('img', {
        src: adImageUrl,
        alt: adName
    });

    adBanner.appendChild(image);
    banner.appendChild(adBanner);
    return banner;
};

export default Banner;