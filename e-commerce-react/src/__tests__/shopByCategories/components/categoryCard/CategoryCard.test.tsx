import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CategoryCard from '../../../../features/shopByCategories/components/categoryCard/CategoryCard';

const data = {
    categoryName: "Title",
    categoryImageUrl: "",
};

describe('CategoryCard', () => {
    it("renders component", async () => {
        render(<CategoryCard {...data} />);

        expect(await screen.findByText(data.categoryName)).toBeInTheDocument();

        const image = screen.getByAltText(data.categoryName);
        expect(image).not.toBeNull();
        expect(image).toHaveAttribute('src', data.categoryImageUrl);
    })

    it("matches snapshot", () => {
        const container = renderer.create(<CategoryCard {...data} />).toJSON;
        expect(container).toMatchSnapshot();
    })
})