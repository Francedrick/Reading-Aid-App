
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Link } from 'expo-router';

const EditProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Black Background */}
      <View style={styles.topBar} />

      {/* Overlay Header and Avatar */}
      <View style={styles.overlayRow}>
        <Text style={styles.headerText}>EDIT PROFILE</Text>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatar} />
          <TouchableOpacity style={styles.avatarEditIcon}>
            <Text style={styles.icon}>✏️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Spacer */}
      <View style={{ height: 60 }} />

      {/* Input Fields */}
      {['Name', 'Username', 'Email', 'Contact'].map((label, idx) => (
        <View key={idx} style={styles.inputGroup}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.inputRow}>
            <TextInput
              placeholder={`Enter ${label}`}
              style={styles.input}
              placeholderTextColor="#999"
            />
            <Text style={styles.icon}>✏️</Text>
          </View>
        </View>
      ))}

      {/* Change Password */}
      <TouchableOpacity style={styles.changePassword}>
        <Text style={styles.changeText}>Change Password</Text>
        <Text style={styles.icon}>➡️</Text>
      </TouchableOpacity>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Link href='profile'>
          <Text style={styles.buttonText}>Cancel</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Link href='profile'>
          <Text style={styles.buttonText}>Save</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  topBar: {
    backgroundColor: '#000',
    height: 140,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  overlayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: -40, // Pulls it up to overlap black tab
    zIndex: 1,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginTop: 60
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ccc',
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarEditIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: '#888',
  },
  inputGroup: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '500',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    fontSize: 18,
    marginLeft: 10,
  },
  changePassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 14,
    borderRadius: 6,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  changeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  button: {
    flex: 0.48,
    backgroundColor: '#ddd',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default EditProfileScreen;
