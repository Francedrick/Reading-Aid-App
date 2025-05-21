import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Linking, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const HelpSupportScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@readingaidapp.com');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📘 Help & Support</Text>

      <Text style={styles.sectionTitle}>🔧 Getting Started</Text>
      <Text style={styles.paragraph}>
        Welcome to Reading Aid! Our application is designed to enhance your reading experience through customizable features.
      </Text>
      <Text style={styles.paragraph}>
        Key Features:
        {'\n'}- Text Presentation Controls: Adjust font type, size, spacing, and color themes to suit your reading preferences.
        {'\n'}- Text-to-Speech (TTS): Listen to text read aloud, aiding comprehension and reducing eye strain.
        {'\n'}- Reading Progress Tracking: Monitor your reading habits and progress over time.
        {'\n'}- Library Access: Save and organize your reading materials for easy access.
      </Text>

      <Text style={styles.sectionTitle}>❓ Frequently Asked Questions (FAQs)</Text>
      <Text style={styles.paragraph}>
        Q1: How do I adjust the font size and style?
        {'\n'}Navigate to Settings &gt; Text Presentation. Here, you can customize:
        {'\n'}- Font Size: Choose from options like Small, Medium, or Large.
        {'\n'}- Font Style: Select from styles such as Normal, Italic, or Bold.
        {'\n'}- Text Border: Apply borders to text with options like None, Thin, or Thick.
      </Text>
      <Text style={styles.paragraph}>
        Q2: How can I enable Text-to-Speech?
        {'\n'}To activate TTS:
        {'\n'}1. Open the reading material.
        {'\n'}2. Tap the Speaker icon located at the top-right corner.
        {'\n'}3. Press Play to start listening.
      </Text>
      <Text style={styles.paragraph}>
        Q3: Can I save articles for offline reading?
        {'\n'}Yes! When viewing an article:
        {'\n'}1. Tap the Save icon.
        {'\n'}2. Access saved articles via Library &gt; Saved Articles.
      </Text>
      <Text style={styles.paragraph}>
        Q4: How do I track my reading progress?
        {'\n'}Go to Profile &gt; Reading Statistics to view:
        {'\n'}- Total reading time
        {'\n'}- Number of articles read
        {'\n'}- Reading streaks
      </Text>

      <Text style={styles.sectionTitle}>📞 Contact Support</Text>
      <Text style={styles.paragraph}>
        If you encounter issues or have suggestions:
        {'\n'}- Email: support@readingaidapp.com
        {'\n'}- In-App Support: Navigate to Settings &gt; Help & Support and tap Contact Us.
        {'\n'}Our support team is available Monday to Friday, 9 AM to 5 PM (GMT+8).
      </Text>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.link}>📧 francedrickreanzares@gmail.com</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>🌐 Additional Resources</Text>
      <Text style={styles.paragraph}>
        For more information:
        {'\n'}- User Guide: Detailed instructions on using all features.
        {'\n'}- Tutorial Videos: Step-by-step visual guides.
        {'\n'}- Community Forum: Connect with other users, share tips, and ask questions.
        {'\n'}Access these resources via Settings &gt; Help & Support &gt; Resources.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: width * 0.05,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: height * 0.03,
    marginBottom: height * 0.01,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: height * 0.015,
  },
  link: {
    fontSize: 16,
    color: '#1E90FF',
    marginBottom: height * 0.02,
  },
});

export default HelpSupportScreen;
