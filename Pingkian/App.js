import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={setCurrentScreen} />;
      case 'login':
        return <Login onNavigate={setCurrentScreen} />;
      case 'register':
        return <Register onNavigate={setCurrentScreen} />;
      case 'forgotPassword':
        return <ForgotPassword onNavigate={setCurrentScreen} />;
      default:
        return <Home onNavigate={setCurrentScreen} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
