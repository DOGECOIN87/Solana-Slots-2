import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  it('renders the title', () => {
    render(<Header />);
    expect(screen.getByText('Solana Slots')).toBeInTheDocument();
  });

  it('renders Connect Wallet button when not connected', () => {
    render(<Header walletConnected={false} />);
    expect(screen.getByRole('button', { name: /connect wallet/i })).toBeInTheDocument();
  });

  it('calls onConnect when Connect Wallet button is clicked', () => {
    const handleConnect = vi.fn();
    render(<Header walletConnected={false} onConnect={handleConnect} />);
    fireEvent.click(screen.getByRole('button', { name: /connect wallet/i }));
    expect(handleConnect).toHaveBeenCalledTimes(1);
  });

  it('renders wallet balance and Disconnect button when connected', () => {
    render(<Header walletConnected={true} walletBalance={100} />);
    expect(screen.getByText('100.00 SOL')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /disconnect wallet/i })).toBeInTheDocument();
    expect(screen.getByAltText('Wallet')).toBeInTheDocument(); // Check for wallet icon
  });

  it('calls onDisconnect when Disconnect Wallet button is clicked', () => {
    const handleDisconnect = vi.fn();
    render(<Header walletConnected={true} walletBalance={100} onDisconnect={handleDisconnect} />);
    fireEvent.click(screen.getByRole('button', { name: /disconnect wallet/i }));
    expect(handleDisconnect).toHaveBeenCalledTimes(1);
  });
});
