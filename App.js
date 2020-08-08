import React from 'react';

import ContextProvider from './ContextProvider'
import MainNavigator from './navigation/MainNavigator'

export default function App() {

  return (
      <ContextProvider>
        <MainNavigator />
      </ContextProvider>
  );
}
