import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import { BREAKPOINT_VALUES } from '../../constants/breakpoints'
import { renderWithResponsiveContext } from '../../test-utils/responsive-helpers';

describe('Navbar Component - Mobile', () => {
    beforeEach(() =>{
        // Simulate mobile width
        renderWithResponsiveContext(<Navbar/>, { width: BREAKPOINT_VALUES.mobile_max });
    })
    it('shows mobile menu when width is at mobile breakpoint', () => {
        expect(screen.getByTestId('test-mobile-menu')).toBeInTheDocument();
        expect(screen.queryByTestId('test-desktop-menu')).not.toBeInTheDocument();
    });
    it('shows mobile navigation when hamburger button is clicked', async () => {
        const hamburger_button = screen.getByRole('button', { name: '☰' });
        fireEvent.click(hamburger_button);

        expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    });
    it('has proper navigation structure for accessibility', () => {
        const hamburger_button = screen.getByRole('button', { name: '☰' });
        fireEvent.click(hamburger_button);

        const nav = screen.getByRole('navigation');
        const list = screen.getByRole('list');
        expect(nav).toBeInTheDocument();
        expect(list).toBeInTheDocument();
    });
    it('hides mobile navigation when close button is clicked', () => {
        const hamburger_button = screen.getByRole('button', { name: '☰' });
        fireEvent.click(hamburger_button);

        const closeButton = screen.getByRole('button', { name: '×' });
        fireEvent.click(closeButton);

        expect(screen.queryByRole('link', { name: /home/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('link', { name: /contact/i })).not.toBeInTheDocument();
    });
    it.each([
        { linkName: /home/i },
        { linkName: /projects/i },
        { linkName: /experience/i },
        { linkName: /about/i },
        { linkName: /contact/i }
    ])('hides mobile navigation when $linkName link is clicked', ({ linkName }) => {
        const hamburgerButton = screen.getByRole('button', { name: '☰' });
        fireEvent.click(hamburgerButton);

        const link = screen.getByRole('link', { name: linkName });
        fireEvent.click(link);

        // Check that all links are hidden after clicking any link
        expect(screen.queryByRole('link', { name: /home/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('link', { name: /projects/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('link', { name: /experience/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('link', { name: /about/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('link', { name: /contact/i })).not.toBeInTheDocument();
    });
    

})

describe('Navbar Component - Desktop', () => {
    beforeEach(() =>{
        // Simulate desktop width
        renderWithResponsiveContext(<Navbar/>, { width: BREAKPOINT_VALUES.desktop_max });
    })
    it('shows desktop menu when width is above mobile breakpoint', () => {
        expect(screen.getByTestId('test-desktop-menu')).toBeInTheDocument();
        expect(screen.queryByTestId('test-mobile-menu')).not.toBeInTheDocument();
    });
    it('renders all navigation items', () => {
        expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    });
    it('has correct router link paths', () => {
        const homeLink = screen.getByRole('link', { name: /home/i });
        const projectsLink = screen.getByRole('link', { name: /projects/i });
        const experienceLink = screen.getByRole('link', { name: /experience/i });
        const aboutLink = screen.getByRole('link', { name: /about/i });
        const contactLink = screen.getByRole('link', { name: /contact/i });

        expect(homeLink).toHaveAttribute('href', '/portfolio');
        expect(projectsLink).toHaveAttribute('href', '#projects');
        expect(experienceLink).toHaveAttribute('href', '#experience');
        expect(aboutLink).toHaveAttribute('href', '#about');
        expect(contactLink).toHaveAttribute('href', '/contact');
    });
    it('has proper navigation structure for accessibility', () => {
        const nav = screen.getByRole('navigation');
        const list = screen.getByRole('list');

        expect(nav).toBeInTheDocument();
        expect(list).toBeInTheDocument();
    });

});
