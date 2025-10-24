import React from 'react';
import { render, screen } from '@testing-library/react';
import StarryBackground from '../StarryBackground';
import '@testing-library/jest-dom';

describe('StarryBackground', () => {

  it('renders without crashing', () => {
    render(<StarryBackground />);
    const container = screen.getByTestId('starry-sky');
    expect(container).toBeInTheDocument();
  });

  it('renders the correct number of stars', () => {
    render(<StarryBackground />);
    const stars = document.querySelectorAll('.star');
    expect(stars).toHaveLength(50);
  });

  it('applies correct CSS class to container', () => {
    render(<StarryBackground />);
    const container = document.querySelector('.starry-background');
    expect(container).toBeInTheDocument();
  });

  it('applies correct CSS class to stars', () => {
    render(<StarryBackground />);
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      expect(star).toHaveClass('star');
    });
  });
});