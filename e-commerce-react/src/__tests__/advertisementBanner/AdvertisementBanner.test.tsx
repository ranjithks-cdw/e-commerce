import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import AdvertisementBanner from "../../features/advertisementBanner/AdvertisementBanner"

describe('Advertisement Banner', () => {
    it("renders component", async () => {
        const {container} = render(<AdvertisementBanner />);
        expect(container).not.toBeNull();
    })

    it("matches snapshot", () => {
        const container = renderer.create(<AdvertisementBanner />).toJSON;
        expect(container).toMatchSnapshot();
    })
})