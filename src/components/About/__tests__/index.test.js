import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import About from '..'; 

describe('About component', () => {
    //First Test
    it('renders', () => {
        render(<About />);
    });

    //Second Test
    it('Matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})

afterEach(cleanup);