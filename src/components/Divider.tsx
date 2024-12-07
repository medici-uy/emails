import { Hr } from '@react-email/components';
import React from 'react';

export function Divider() {
  return (
    <Hr
      className="rounded-full h-[0.12rem] bg-gray-200"
      style={{ borderTop: 'none' }}
    />
  );
}
