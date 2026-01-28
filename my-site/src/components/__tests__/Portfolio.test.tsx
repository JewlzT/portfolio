import '@testing-library/jest-dom';
import Portfolio from '../Portfolio';
import { BREAKPOINT_VALUES } from '../../constants/breakpoints'
import { renderWithResponsiveContext } from '../../test-utils/responsive-helpers';
import { screen } from '@testing-library/react';

describe('Portfolio Component - Mobile', () => {
    beforeEach(() =>{
        // Simulate mobile width
        renderWithResponsiveContext(<Portfolio/>, { width: BREAKPOINT_VALUES.mobile_max });
    })
    // Intro Section
    it('renders mobile header layout', () => {
        const mobile_header = screen.getByRole('banner');
        expect(mobile_header).toHaveClass('mobile-portfolio-header');
    })
    it('renders intro section for mobile/tablet', () => { 
        const intro_text = screen.getByTestId("intro-text");
        expect(intro_text).toHaveTextContent("Hello, I'm Julianne");
    })

    // Project Section
    it('renders project section', () => {
        const project_section = document.querySelector(".project-section");
        expect(project_section).toBeInTheDocument();
    })
})

describe('Portfolio Component - Desktop', () => {
    beforeEach(() =>{
        // Simulate desktop width
        renderWithResponsiveContext(<Portfolio/>, { width: BREAKPOINT_VALUES.desktop_min });
    })
    // Intro Section
    it('renders desktop header layout', () => {
        const desktop_header = screen.getByRole('banner');
        expect(desktop_header).toHaveClass('desktop-portfolio-header');
    })
    it('renders intro section for desktop', () => { 
        const intro_text = screen.getByTestId("intro-text");
        expect(intro_text).toHaveTextContent("Hello, I'm Julianne");
    })

    // Project Section
    it('renders project section', () => {
        const project_section = document.querySelector(".project-section");
        expect(project_section).toBeInTheDocument();
    })

})

describe('Additional Tests Needed', () => {
    // For both mobile and desktop
    it.todo('renders experience section');
    it.todo('renders about section');
    it.todo('renders sneak peak section');
})