import React from 'react';
import SlotCell from './SlotCell';

export default {
  title: 'Components/SlotCell',
  component: SlotCell,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    symbol: { control: 'text' },
  },
};

export const Default = (args) => <SlotCell {...args} />;

Default.args = {
  symbol: '💎', // Placeholder symbol
};
