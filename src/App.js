import React from 'react';

import MainDashboard from './containers/MainDashboard/MainDashboard';
import Signup from './components/Signup/Signup';
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      {/* <MainDashboard /> */}
      <Signup />
    </AuthProvider>
  );
}

export default App;
