import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SlotControls from './SlotControls';

describe('SlotControls Component', () => {
  const mockProps = {
    isSpinning: false,
    onSpin: vi.fn(),
    currentWager: 1,
    setCurrentWager: vi.fn(),
    wagerOptions: [1, 5, 10],
    lastWin: 0,
    walletConnected: true,
  };

  it('renders wager options and current wager is highlighted', () => {
    render(<SlotControls {...mockProps} />);
    expect(screen.getByText('Wager:')).toBeInTheDocument();
    mockProps.wagerOptions.forEach(option => {
      const button = screen.getByRole('button', { name: `${option}` });
      expect(button).toBeInTheDocument();
      if (option === mockProps.currentWager) {
        expect(button).toHaveClass('bg-primary');
      } else {
        expect(button).not.toHaveClass('bg-primary');
      }
    });
  });

  it('calls setCurrentWager when a wager button is clicked', () => {
    render(<SlotControls {...mockProps} />);
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    expect(mockProps.setCurrentWager).toHaveBeenCalledTimes(1);
    expect(mockProps.setCurrentWager).toHaveBeenCalledWith(5);
  });

  it('renders SPIN button when not spinning', () => {
    render(<SlotControls {...mockProps} isSpinning={false} />);
    expect(screen.getByRole('button', { name: 'SPIN' })).toBeInTheDocument();
  });

  it('renders Spinning... text and disables button when spinning', () => {
    render(<SlotControls {...mockProps} isSpinning={true} />);
    const spinButton = screen.getByRole('button', { name: 'Spinning...' });
    expect(spinButton).toBeInTheDocument();
    expect(spinButton).toBeDisabled();
  });

  it('calls onSpin when SPIN button is clicked and wallet is connected', () => {
    render(<SlotControls {...mockProps} walletConnected={true} />);
    fireEvent.click(screen.getByRole('button', { name: 'SPIN' }));
    expect(mockProps.onSpin).toHaveBeenCalledTimes(1);
  });

  it('disables SPIN button when wallet is not connected', () => {
    render(<SlotControls {...mockProps} walletConnected={false} />);
    const spinButton = screen.getByRole('button', { name: 'SPIN' });
    expect(spinButton).toBeInTheDocument();
    expect(spinButton).toBeDisabled();
  });

  it('displays win amount when lastWin is greater than 0', () => {
    render(<SlotControls {...mockProps} lastWin={25.50} />);
    expect(screen.getByText('+ 25.50 SOL')).toBeInTheDocument();
  });

  it('does not display win amount when lastWin is 0', () => {
    render(<SlotControls {...mockProps} lastWin={0} />);
    expect(screen.queryByText(/\+ \d+\.\d{2} SOL/)).not.toBeInTheDocument();
  });

  it('displays connect wallet message when wallet is not connected', () => {
    render(<SlotControls {...mockProps} walletConnected={false} />);
    expect(screen.getByText('Connect your wallet to play!')).toBeInTheDocument();
  });

  it('does not display connect wallet message when wallet is connected', () => {
    render(<SlotControls {...mockProps} walletConnected={true} />);
    expect(screen.queryByText('Connect your wallet to play!')).not.toBeInTheDocument();
  });
});
