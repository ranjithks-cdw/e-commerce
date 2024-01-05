import { createElement } from "../../../../utils/htmlUtils.js";

const CardContent = {
    create: (props) => createDOM(props),
};

const createDOM = (props) => {
    const {categoryName, categoryImageUrl} = props;
    
    const cardWrapper = createElement('div', {
        className: 'category-card',
    });
    
    const imageWrapper = createElement('div', {
        className: 'category-image',
    });
    const image = createElement('img', {
        src: categoryImageUrl,
        alt: categoryName
    });
    imageWrapper.appendChild(image);
    
    const cardName = createElement('p', {
        className: 'category-name',
        textContent: categoryName,
    });

    cardWrapper.appendChild(imageWrapper);
    cardWrapper.appendChild(cardName);

    return cardWrapper;
};

export default CardContent;