import Link from "next/link";
import { SBCFeatureTitles } from "./constants/titleConstants";
import CategoryCard from "./components/categoryCard/categoryCard";
import './styles.css';
import PATH_CONSTANTS from "@/constants/pathConstants";

const ShopByCategories = async () => {
    const shopByCategories = await getCategoriesData();

    const cardsContent = shopByCategories?.map(content => <CategoryCard key={content.categoryName} {...content} />)

    return ( 
        <div className="shop-by-categories">
            <p className="feature-title">{SBCFeatureTitles.PRODUCT_CATEGORIES} <span className="navigate-link"><Link href={PATH_CONSTANTS.PRODUCTS.PATH}>{SBCFeatureTitles.VIEW_ALL}</Link></span></p>
            <div className="category-content">
                {cardsContent}
            </div>
        </div>
     );
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
}
 
export default ShopByCategories;