// import '@testing-library/jest-dom';
// import Portfolio from '../Portfolio';
// import { BREAKPOINT_VALUES } from '../../constants/breakpoints'
// import { renderWithResponsiveContext } from '../../test-utils/responsive-helpers';
// import { screen } from '@testing-library/react';

// describe('Projects Section - Mobile', () => {
//     it('contains all project links', () => {
//         expect(screen.getByRole('link', { name: /personal-portfolio/i })).toBeInTheDocument();
//         expect(screen.getByRole('link', { name: /talkwithtito/i })).toBeInTheDocument();
//         expect(screen.getByRole('link', { name: /sched/i })).toBeInTheDocument();
//         expect(screen.getByRole('link', { name: /galactic-rolodex/i })).toBeInTheDocument();
//     })
//     it('shows text under projects', () => {
//         renderWithResponsiveContext(<Portfolio/>, { width: BREAKPOINT_VALUES.desktop_min });
//     })
//     it('renders all projects', () => {
//         const project_number = document.querySelectorAll(".mobile-project-section");
//         expect(project_number).toHaveLength(4);
//     })
// })

// describe('Projects Section - Desktop', () => {
//     it('contains all project links', () => {
//         expect(screen.getByRole('link', { name: /personal-portfolio/i })).toBeInTheDocument();
//         expect(screen.getByRole('link', { name: /talkwithtito/i })).toBeInTheDocument();
//         expect(screen.getByRole('link', { name: /sched/i })).toBeInTheDocument();
//         expect(screen.getByRole('link', { name: /galactic-rolodex/i })).toBeInTheDocument();
//     })
//     it('renders all projects', () => {
//         const project_number = document.querySelectorAll(".mobile-project-section");
//         expect(project_number).toHaveLength(4);
//     })

//     // Only on desktop
//     it('shows text on hover', () => {
//         renderWithResponsiveContext(<Portfolio/>, { width: BREAKPOINT_VALUES.desktop_min });
//     })
//     it('renders 8-bit animation', () => {
//         const pixel_character = screen.getAllByAltText("8-bit character floating on a star animation");
//         expect(pixel_character).toBeInTheDocument;
//     })
// })