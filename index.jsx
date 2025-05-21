import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  const handleGetStarted = () => {
    router.push('/signup');
  };

  return (
    <ImageBackground
      source={require('@/assets/images/White-Background-PNG-HD-Isolated.png')} // Replace with your background image path
      style={[styles.background, { width, height }]}
      resizeMode="cover"
    >
      {/* Dark overlay to improve text readability */}
      <View style={styles.overlay} />

      {/* Main Content */}
      <View style={styles.container}>
        {/* App Logo */}
        <Image
          source={require('@/assets/images/494815417_711989127915195_2968142988962673046_n (2).png')} // Replace with your logo path
          style={[styles.logo, { width: width * 0.3, height: width * 0.3 }]}
          resizeMode="contain"
        />

        {/* Title and Subtitle */}
        <Text style={[styles.title, { fontSize: width * 0.08 }]}>
          Reading Aid Application
        </Text>
        <Text style={[styles.subtitle, { fontSize: width * 0.045 }]}>
          Helping you read and learn.
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          style={[
            styles.button,
            {
              paddingVertical: height * 0.018,
              paddingHorizontal: width * 0.2,
            },
          ]}
          onPress={handleGetStarted}
        >
          <Text style={[styles.buttonText, { fontSize: width * 0.045 }]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // semi-transparent overlay
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'transparent', // make sure it's not white
  },
  logo: {
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    color: '#eee',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
});

export default HomeScreen;
