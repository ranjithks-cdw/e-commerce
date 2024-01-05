import { sbcTypes } from "../../types/categoryTypes";

const CategoryCard = (props: sbcTypes) => {
    const {categoryName, categoryImageUrl} = props;
    return ( 
        <>
            <div className="category-card">
                <div className="category-image">
                    <img src={categoryImageUrl} alt={categoryName} />
                </div>
                <p className="category-name">{categoryName}</p>
            </div>
        </>
     );
}
 
export default CategoryCard;