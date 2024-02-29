import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import AboutUs from "../../features/aboutUs/AboutUs";
import { AboutUsConstants } from "../../features/aboutUs/constants/aboutUsConsts";

describe('About Us', () => {
    it("renders component", async () => {
        
        render(<AboutUs />);
        const titleText = await screen.findByText(AboutUsConstants.title);
        expect(titleText).toBeInTheDocument();
    })

    it("matches snapshot", () => {
        const container = renderer.create(<AboutUs />).toJSON;
        expect(container).toMatchSnapshot();
    })

    jest.resetAllMocks();
})