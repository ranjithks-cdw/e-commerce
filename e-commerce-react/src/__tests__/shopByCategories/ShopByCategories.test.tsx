import { render, screen, waitFor } from "@testing-library/react";
import renderer from 'react-test-renderer';
import ShopByCategories from "../../features/shopByCategories/ShopByCategories";
import { SBCFeatureTitles } from "../../features/shopByCategories/constants/titleConstants";
import { MemoryRouter } from "react-router";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Use the actual implementation for other functions
    Link: jest.fn().mockImplementation(({ to, children }) => <a href={to}>{children}</a>),
}));

describe('ShopByCategories', () => {
    it("renders component", async () => {
        render(
            <MemoryRouter>
                <ShopByCategories />
            </MemoryRouter>
        );
        const titleText = await waitFor(() => screen.findByText(SBCFeatureTitles.PRODUCT_CATEGORIES), {timeout: 2000});
        expect(titleText).toBeInTheDocument();
    })

    it("matches snapshot", () => {
        const container = renderer.create(
            <MemoryRouter>
                <ShopByCategories />
            </MemoryRouter>
        ).toJSON;
        expect(container).toMatchSnapshot();
    })

    jest.restoreAllMocks();
})