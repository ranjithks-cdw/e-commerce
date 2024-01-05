import { APP_PATHS } from "../../constants/routeConstants.js";
import { createElement } from "../../utils/htmlUtils.js";
import CardContent from "./components/cardContent/CardContent.js";
import { SBCFeatureTitles } from "./constants/titleConstants.js";

const ShopByCategories = {
    addComponent: () => addComponent(),
    removeComponent: () => removeComponent(),
};

const createDOM = async () => {
    const shopByCategories = createElement('div', {
        className: 'shop-by-categories',
    });

    const categoryContent = createElement('div', {
        className: 'category-content',
    });

    const featureTitle = createElement('p', {
        className: 'feature-title',
        textContent: SBCFeatureTitles.PRODUCT_CATEGORIES
    });

    const viewAll = createElement('span', {
        className: 'navigate-link',
    });
    const link = createElement('a', {
        href: APP_PATHS.PRODUCTS.PATH,
        textContent: SBCFeatureTitles.VIEW_ALL
    });
    viewAll.appendChild(link);

    const contentWrapper = new DocumentFragment();
    const data = await getCategoriesData();
    data.forEach(content => {
        const cardContent = CardContent.create({...content});
        contentWrapper.appendChild(cardContent);
    });

    
    featureTitle.appendChild(viewAll);
    shopByCategories.appendChild(featureTitle);
    categoryContent.appendChild(contentWrapper);
    shopByCategories.appendChild(categoryContent);
    return shopByCategories;
};

const addComponent = () => {
    const component = createDOM();
    return component;
};

const removeComponent = () => {

};

const getCategoriesData = async () => {
    const shopByCategoriesData = [
        {
            categoryName: "Title 1",
            categoryImageUrl: "https://dummyimage.com/600x400/aaaaaa/f2f2f2.jpg",
        },
        {
            categoryName: "Title 2",
            categoryImageUrl: "https://dummyimage.com/600x400/aaaaaa/f2f2f2.jpg",
        },
        {
            categoryName: "Title 3",
            categoryImageUrl: "https://dummyimage.com/600x400/aaaaaa/f2f2f2.jpg",
        },
        {
            categoryName: "Title 4",
            categoryImageUrl: "https://dummyimage.com/600x400/aaaaaa/f2f2f2.jpg",
        },
        {
            categoryName: "Title 5",
            categoryImageUrl: "https://dummyimage.com/600x400/aaaaaa/f2f2f2.jpg",
        },
      ];
    
      return shopByCategoriesData;
};

export default ShopByCategories;