// @v2: cleanup pass-1: improved file organization
import React from 'react';
import { AppProvider } from './context/AppContext';
import { AppLayout } from './components/Layout/AppLayout';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default App;