import { render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import Banner from "../../../features/advertisementBanner/components/banner/Banner";

const adData = {
    adName: "Title 1",
    adImageUrl: "https://dummyimage.com/600x400/aaaaaa/f2f2f2.jpg",
    adRedirectUrl: "/products"
};

describe('Banner', () => {
    it("renders component", async () => {
        render(
            <MemoryRouter>
                <Banner {...adData} />
            </MemoryRouter>
        );
        const image = await waitFor(() => screen.findByAltText(adData.adName), {timeout: 2000});
        expect(image).not.toBeNull();
        expect(image).toHaveAttribute('src', adData.adImageUrl);
    })

    it("matches snapshot", () => {
        const container = renderer.create(
            <MemoryRouter>
                <Banner {...adData} />
            </MemoryRouter>
        ).toJSON;
        expect(container).toMatchSnapshot();
    })
})