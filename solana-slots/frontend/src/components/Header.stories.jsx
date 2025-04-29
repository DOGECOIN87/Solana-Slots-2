import React from 'react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    walletConnected: { control: 'boolean' },
    walletBalance: { control: 'number' },
    onConnect: { action: 'connectWallet' },
    onDisconnect: { action: 'disconnectWallet' },
  },
};

export const Default = (args) => <Header {...args} />;

Default.args = {
  walletConnected: false,
  walletBalance: 0,
};

export const Connected = (args) => <Header {...args} />;

Connected.args = {
  walletConnected: true,
  walletBalance: 100,
};
