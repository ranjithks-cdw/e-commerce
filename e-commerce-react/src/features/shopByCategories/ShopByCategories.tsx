import { Link } from "react-router-dom";
import { SBCFeatureTitles } from "./constants/titleConstants";
import APP_PATHS from "../../constants/routeConstants";
import React, { useEffect, useState } from "react";
import { sbcTypes } from "./types/categoryTypes";
import CategoryCard from "./components/categoryCard/CategoryCard";
import './styles.css';

const ShopByCategories = () => {
    const [categoryData, setCategoryData] = useState<sbcTypes[]>([]);

    useEffect(() => {
        const data = [
            {
                categoryName: "Title 1",
                categoryImageUrl: "https://placehold.co/600x400",
            },
            {
                categoryName: "Title 2",
                categoryImageUrl: "https://placehold.co/600x400",
            },
            {
                categoryName: "Title 3",
                categoryImageUrl: "https://placehold.co/600x400",
            },
            {
                categoryName: "Title 4",
                categoryImageUrl: "https://placehold.co/600x400",
            },
            {
                categoryName: "Title 5",
                categoryImageUrl: "https://placehold.co/600x400",
            },
        ];

        setCategoryData(data);
    }, []);

    const cardsContent = categoryData?.map(data => <CategoryCard key={data.categoryName} {...data} />)

    return ( 
        <div className="shop-by-categories">
            <p className="feature-title">{SBCFeatureTitles.PRODUCT_CATEGORIES} <span className="navigate-link"><Link to={APP_PATHS.PRODUCTS.PATH}>{SBCFeatureTitles.VIEW_ALL}</Link></span></p>
            <div className="category-content">
                {cardsContent}
            </div>
        </div>
     );
};
 
export default ShopByCategories;