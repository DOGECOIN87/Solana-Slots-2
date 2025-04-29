import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SlotMachine from './SlotMachine';
import SlotCell from './SlotCell'; // Import the actual component to mock it

// Mock the SlotCell component to simplify testing SlotMachine's logic
vi.mock('./SlotCell', () => ({
  default: vi.fn(({ symbol }) => <div>{symbol.name}</div>), // Render symbol name for testing
}));

describe('SlotMachine Component', () => {
  const mockProps = {
    isSpinning: false,
    onSpin: vi.fn(),
    currentWager: 1,
    setCurrentWager: vi.fn(),
    wagerOptions: [1, 5, 10],
    lastWin: 0,
    walletConnected: true,
  };

  it('initializes the grid with symbols on first render', () => {
    render(<SlotMachine {...mockProps} />);

    // Check that SlotCell was called multiple times (for a 5x3 grid)
    expect(SlotCell).toHaveBeenCalledTimes(15);

    // Check that SlotCell was called with symbol objects
    const calls = vi.mocked(SlotCell).mock.calls;
    calls.forEach(call => {
      const props = call[0];
      expect(props).toHaveProperty('symbol');
      expect(props.symbol).toHaveProperty('id');
      expect(props.symbol).toHaveProperty('name');
      expect(props.symbol).toHaveProperty('value');
      expect(props.symbol).toHaveProperty('path');
    });
  });

  it('updates the grid with new symbols when isSpinning becomes true', async () => {
    const { rerender } = render(<SlotMachine {...mockProps} isSpinning={false} />);

    // Capture initial symbols
    const initialSymbols = vi.mocked(SlotCell).mock.calls.map(call => call[0].symbol.name);

    // Rerender with isSpinning true
    rerender(<SlotMachine {...mockProps} isSpinning={true} />);

    // Advance timers to simulate spin interval
    vi.useFakeTimers();
    act(() => {
      vi.advanceTimersByTime(100); // Advance by one interval
    });
    vi.useRealTimers();

    // Check that SlotCell was called again with new symbols
    const symbolsAfterSpin = vi.mocked(SlotCell).mock.calls.slice(15).map(call => call[0].symbol.name); // Get calls after initial render

    // Expect at least some symbols to have changed (due to randomness)
    // This is a probabilistic test, but highly likely to pass if the spin logic runs
    const changedSymbols = initialSymbols.filter((symbol, index) => symbol !== symbolsAfterSpin[index]);
    expect(changedSymbols.length).toBeGreaterThan(0);

    // Reset mock call count for subsequent tests
    vi.mocked(SlotCell).mockClear();
  });

  // Note: Testing the actual spin animation (CSS) is typically done with end-to-end tests,
  // not unit tests. This test verifies the state update logic.
});
