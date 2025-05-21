import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header} />

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <FontAwesome name="user" size={width * 0.14} color="#888" />
        </View>
        <View style={styles.editIcon}>
          <Ionicons name="pencil" size={width * 0.05} color="#fff" />
        </View>
      </View>

      {/* Name and Email */}
      <Text style={styles.name}>Eysi Sarmiyento</Text>
      <Text style={styles.email}>eysisarmiyento143@gmail.com</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Menu Links */}
      <Link href="/camera" asChild>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="camera-outline" size={width * 0.055} color="#333" />
            <Text style={styles.menuText}>Camera</Text>
          </View>
          <Ionicons name="chevron-forward" size={width * 0.05} color="#999" />
        </TouchableOpacity>
      </Link>

      <Link href="/editprofile" asChild>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="create-outline" size={width * 0.055} color="#333" />
            <Text style={styles.menuText}>Edit Profile</Text>
          </View>
          <Ionicons name="chevron-forward" size={width * 0.05} color="#999" />
        </TouchableOpacity>
      </Link>

      <Link href="/Settings" asChild>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="settings-outline" size={width * 0.055} color="#333" />
            <Text style={styles.menuText}>Settings</Text>
          </View>
          <Ionicons name="chevron-forward" size={width * 0.05} color="#999" />
        </TouchableOpacity>
      </Link>

      <Link href="/History" asChild>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="cloud-outline" size={width * 0.055} color="#333" />
            <Text style={styles.menuText}>History</Text>
          </View>
          <Ionicons name="chevron-forward" size={width * 0.05} color="#999" />
        </TouchableOpacity>
      </Link>

      <Link href="/Help&Support" asChild>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="headset-outline" size={width * 0.055} color="#333" />
            <Text style={styles.menuText}>Help & Support</Text>
          </View>
          <Ionicons name="chevron-forward" size={width * 0.05} color="#999" />
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
};

const MenuItem = ({ icon, label }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <Ionicons name={icon} size={width * 0.055} color="#333" />
        <Text style={styles.menuText}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={width * 0.05} color="#999" />
    </TouchableOpacity>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: height * 0.2,  // Responsive height for header
    backgroundColor: '#000',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -height * 0.1,  // Adjust avatar position based on screen height
    marginBottom: height * 0.05,  // Adjust bottom margin
  },
  avatar: {
    width: width * 0.3,  // Adjust width based on screen width
    height: width * 0.3,  // Keep width and height equal to form a circle
    borderRadius: width * 0.15,  // 50% of width to make a circle
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    position: 'absolute',
    right: width * 0.3,  // Adjust based on screen width
    bottom: 6,
    backgroundColor: '#000',
    borderRadius: 30,
    padding: width * 0.04,  // Adjust padding based on screen width
  },
  name: {
    fontSize: width * 0.08,  // Adjust font size based on screen width
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  email: {
    fontSize: width * 0.05,  // Adjust font size for email
    color: '#666',
    textAlign: 'center',
    marginBottom: height * 0.05,  // Adjust bottom margin
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: width * 0.1,  // Adjust divider width
    marginBottom: height * 0.05,  // Adjust bottom margin
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: height * 0.025,  // Dynamic padding based on height
    paddingHorizontal: width * 0.05,  // Dynamic padding based on width
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    marginHorizontal: width * 0.05,  // Adjust margin based on width
    marginBottom: height * 0.03,  // Adjust margin based on height
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    marginLeft: width * 0.05,  // Adjust space between icon and text based on width
    fontSize: width * 0.05,  // Adjust font size based on width
    color: '#333',
  },
});
