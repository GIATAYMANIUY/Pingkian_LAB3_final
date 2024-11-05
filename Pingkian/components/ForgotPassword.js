import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function ForgotPassword({ onNavigate }) {
  const handleLogin = () => {
    onNavigate('login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Password Recovery</Text>
      <Text style={styles.subHeader}>Please enter email</Text>
      <TextInput placeholder="Your email address" placeholderTextColor="#CCCCCC" style={styles.input} />

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Send</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.linkText}>Return to Sign In</Text>
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
  header: {
    fontSize: 34,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 18,
    color: '#BBBBBB',
    marginBottom: 30,
  },
  input: {
    width: '85%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    color: '#FFFFFF',
    borderColor: '#0077FF',
    borderWidth: 1,
  },
  resetButton: {
    backgroundColor: '#0077FF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginTop: 20,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#0077FF',
    marginTop: 20,
    fontSize: 14,
  },
});

export default ForgotPassword;
