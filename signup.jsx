import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { Link } from 'expo-router';

const SignUpScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: height * 0.05 }]}>
      <Text style={[styles.title, { fontSize: width * 0.07 }]}>
        READING AID ASSISTANT
      </Text>

      <View style={[styles.card, { minHeight: height * 0.85, padding: width * 0.05 }]}>
        <Text style={[styles.header, { fontSize: width * 0.055 }]}>SIGN UP</Text>

        <Text style={styles.label}>USERNAME</Text>
        <TextInput
          style={[styles.input, { fontSize: width * 0.04, padding: width * 0.03 }]}
          placeholder="Enter username"
        />

        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={[styles.input, { fontSize: width * 0.04, padding: width * 0.03 }]}
          placeholder="Enter email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>CONTACT</Text>
        <TextInput
          style={[styles.input, { fontSize: width * 0.04, padding: width * 0.03 }]}
          placeholder="Enter contact number"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={[styles.input, { fontSize: width * 0.04, padding: width * 0.03 }]}
          placeholder="Enter password"
          secureTextEntry
        />

        <Link href="login" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                </Link>

        <Text style={[styles.or, { fontSize: width * 0.04 }]}>
          ─────────── OR ───────────
        </Text>

        <View style={styles.socialRow}>
          <Image source={require('@/assets/images/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png')} style={styles.icon} />
          <Image source={require('@/assets/images/f_logo_RGB-Blue_1024.png')} style={styles.icon} />
        </View>

        <Text style={[styles.footerText, { fontSize: width * 0.037 }]}>
          <Link href="/login">
            ALREADY A USER? <Text style={styles.loginLink}>LOG IN</Text>
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f1eded',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
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
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  or: {
    marginVertical: 20,
    color: '#555',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  footerText: {
    marginTop: 10,
  },
  loginLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
