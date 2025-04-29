import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SlotCell from './SlotCell';

describe('SlotCell Component', () => {
  it('renders the symbol image with correct src and alt text', () => {
    const mockSymbol = {
      id: 'diamond',
      name: 'Diamond',
      value: 5,
      path: '/assets/symbols/Diamond.png',
    };
    render(<SlotCell symbol={mockSymbol} isSpinning={false} />);

    const symbolImage = screen.getByAltText('Diamond');
    expect(symbolImage).toBeInTheDocument();
    expect(symbolImage).toHaveAttribute('src', '/assets/symbols/Diamond.png');
  });

  // Add more tests here for spinning state if needed
});
