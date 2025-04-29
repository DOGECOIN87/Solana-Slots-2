import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/Solana Slots/i)).toBeInTheDocument();
    expect(screen.getByText(/Provably Fair 5×3 Slots Game on Solana/i)).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /terms/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /privacy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /documentation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });
});
