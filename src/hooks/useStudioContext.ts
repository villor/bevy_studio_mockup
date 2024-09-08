import { StudioContext } from '@/StudioContext';
import React from 'react';

export function useStudioContext() {
  const context = React.useContext(StudioContext);

  if (!context) {
    throw new Error(
      'useStudioContext must be used within the scope of StudioContextProvider',
    );
  }

  return context;
}
