import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Register({ onNavigate }) {
  const handleLogin = () => {
    onNavigate('login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Join SkillHatch</Text>
      <Text style={styles.subHeader}>Create your account to get started</Text>
      <TextInput placeholder="Choose a Username" placeholderTextColor="#CCCCCC" style={styles.input} />
      <TextInput placeholder="Enter Email Address" placeholderTextColor="#CCCCCC" style={styles.input} />
      <TextInput placeholder="Set a Password" placeholderTextColor="#CCCCCC" secureTextEntry={true} style={styles.input} />
      <TextInput placeholder="Confirm Password" placeholderTextColor="#CCCCCC" secureTextEntry={true} style={styles.input} />

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.linkText}>If you have an existing account, Log in here</Text>
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
    color: 'green',
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
  registerButton: {
    backgroundColor: '#0077FF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginTop: 20,
  },
  registerButtonText: {
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

export default Register;
