// @v2: release pass-2: finalized README documentation
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