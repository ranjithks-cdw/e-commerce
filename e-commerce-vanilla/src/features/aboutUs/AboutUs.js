import { createElement } from "../../utils/htmlUtils.js";
import { AboutUsConstants } from "./constants/aboutUsConsts.js";

const AboutUs = {
    addComponent: () =>  addComponent(),
    removeComponent: () =>  removeComponent(),
};

const addComponent = () => {
    const component = createDOM();

    return component;
};

const removeComponent = () => {
    
};

const createDOM = async () => {
    const aboutUs = createElement('div', {
        className: 'about-us',
    });

    const sectionTitle = createElement('p', {
        className: 'section-title',
        textContent: AboutUsConstants.title,
    });

    const data = await getAboutUsData();

    const sectionContent = createElement('p', {
        className:  'section-content',
        textContent: data
    });

    aboutUs.appendChild(sectionTitle);
    aboutUs.appendChild(sectionContent);

    return aboutUs;
};


const getAboutUsData = async () => {
    const data = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    return data;
};
 
export default AboutUs;