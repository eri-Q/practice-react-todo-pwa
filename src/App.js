import React from 'react';
import './App.css';
import './service/firebase';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './providers/AuthProvider';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Dashboard />
      <Footer />
    </AuthProvider>
  );
}

export default App;
