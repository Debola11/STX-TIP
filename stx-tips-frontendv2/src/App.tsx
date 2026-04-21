// @v2: perf pass-2: improved useMemo usage
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