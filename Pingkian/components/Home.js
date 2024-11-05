import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

function Home({ onNavigate }) {
  const handleLoginNavigation = () => {
    onNavigate('login');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./logo.jpg')} 
        style={styles.logo} 
      />
      <Text style={styles.tagline}>SkillHatch - Unlock Your Potential</Text>
      <Text style={styles.description}>
        Welcome to SkillHatch, where we bring together skill enthusiasts from around the world.
        Join us to build and grow your professional skills, stay ahead, and achieve excellence.
      </Text>

      <TouchableOpacity style={styles.joinButton} onPress={handleLoginNavigation}>
        <Text style={styles.joinButtonText}>Be one of us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 24,
    color: '#0077FF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#BBBBBB',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  joinButton: {
    backgroundColor: '#0077FF',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
