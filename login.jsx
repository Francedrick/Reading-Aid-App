import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

const screenHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      <Link href="/camera"></Link>
    } else {
      setError('Incorrect username or password.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>READING AID ASSISTANT</Text>

      <View style={styles.container}>
        <Text style={styles.header}>LOGIN</Text>

        {error !== '' && (
          <View style={styles.errorContainer}>
            <FontAwesome name="exclamation-triangle" size={16} color="red" />
            <Text style={styles.errorText}> {error}</Text>
          </View>
        )}

        <Text style={styles.label}>USERNAME</Text>
        <TextInput
          style={[styles.input, error && styles.errorBorder]}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholder="Enter username"
        />

        <Text style={styles.label}>PASSWORD</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.input,
              styles.passwordInput,
              error && styles.errorBorder,
            ]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholder="Enter password"
            placeholderTextColor="#888"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="#555"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[
              styles.checkboxBase,
              rememberMe && styles.checkboxChecked,
            ]}
            onPress={() => setRememberMe(!rememberMe)}
          />
          <Text style={styles.checkboxLabel}>REMEMBER ME?</Text>
        </View>

        <Link href="camera" asChild>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        </Link>

        <TouchableOpacity>
          <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>

        <Text style={styles.or}>─────────── OR ───────────</Text>

        <View style={styles.socialRow}>
          <Image
            source={require('@/assets/images/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png')}
            style={styles.icon}
          />
          <Image
            source={require('@/assets/images/f_logo_RGB-Blue_1024.png')}
            style={styles.icon}
          />
        </View>

        <Text style={styles.footerText}>
          <Link href="/signup">
            NEED AN ACCOUNT? <Text style={styles.signupLink}>SIGN UP</Text>
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#f1eded',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    minHeight: screenHeight * 0.85,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontSize: 14,
    marginTop: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 40,
    color: 'black', // 👈 Ensures password text is black
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  errorBorder: {
    borderColor: 'red',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  checkboxBase: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#999',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'black',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotText: {
    marginTop: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  or: {
    marginVertical: 20,
    fontSize: 14,
    color: '#555',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  footerText: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  signupLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  errorText: {
    color: 'red',
    fontStyle: 'italic',
  },
});

export default LoginScreen;
