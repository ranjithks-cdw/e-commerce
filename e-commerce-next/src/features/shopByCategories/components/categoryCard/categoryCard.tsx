import Image from "next/image";
import { sbcTypes } from "../../types/categoryTypes";

const CategoryCard = (props: sbcTypes) => {
    const {categoryName, categoryImageUrl} = props;
    return ( 
        <>
            <div className="category-card">
                <div className="category-image">
                    <Image src={categoryImageUrl} alt={categoryName} width={0} height={0} sizes="100vw" priority />
                </div>
                <p className="category-name">{categoryName}</p>
            </div>
        </>
     );
}
 
export default CategoryCard;