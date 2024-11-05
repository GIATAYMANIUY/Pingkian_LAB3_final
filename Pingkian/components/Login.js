import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Login({ onNavigate }) {
  const handleForgotPassword = () => {
    onNavigate('forgotPassword');
  };

  const handleRegister = () => {
    onNavigate('register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to SkillHatch</Text>
      <Text style={styles.subHeader}>Log into your account</Text>
      <TextInput placeholder="Enter Username" placeholderTextColor="#CCCCCC" style={styles.input} />
      <TextInput placeholder="Enter Password" placeholderTextColor="#CCCCCC" secureTextEntry={true} style={styles.input} />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Access Account</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.linkText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.linkText}>New here? Create an Account</Text>
        </TouchableOpacity>
      </View>
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
  loginButton: {
    backgroundColor: '#0077FF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  linkText: {
    color: '#0077FF',
    fontSize: 14,
    marginHorizontal: 10,
  },
});

export default Login;
