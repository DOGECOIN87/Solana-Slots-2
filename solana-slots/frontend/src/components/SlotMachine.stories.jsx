import React from 'react';
import SlotMachine from './SlotMachine';

export default {
  title: 'Components/SlotMachine',
  component: SlotMachine,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isSpinning: { control: 'boolean' },
    onSpin: { action: 'spin' },
    currentWager: { control: 'select', options: [1, 5, 10] },
    setCurrentWager: { action: 'setWager' },
    wagerOptions: { control: 'object' },
    lastWin: { control: 'number' },
    walletConnected: { control: 'boolean' },
  },
};

export const Default = (args) => <SlotMachine {...args} />;

Default.args = {
  isSpinning: false,
  currentWager: 1,
  wagerOptions: [1, 5, 10],
  lastWin: 0,
  walletConnected: false,
};

export const Spinning = (args) => <SlotMachine {...args} />;

Spinning.args = {
  ...Default.args,
  isSpinning: true,
};

export const WithWin = (args) => <SlotMachine {...args} />;

WithWin.args = {
  ...Default.args,
  lastWin: 10,
};

export const WalletConnected = (args) => <SlotMachine {...args} />;

WalletConnected.args = {
  ...Default.args,
  walletConnected: true,
};
