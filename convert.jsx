import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';
import * as Speech from 'expo-speech';

const { width, height } = Dimensions.get('window');

const OverlayScreen = () => {
  const { text } = useLocalSearchParams();

  const [modalVisible, setModalVisible] = useState(false);
  const [fileName, setFileName] = useState('');

  const speakText = (textToSpeak) => {
    Speech.stop();
    Speech.speak(textToSpeak, {
      language: 'en',
      pitch: 1.0,
      rate: 1.0,
    });
  };

  const handleSpeak = () => {
    if (text && text.length > 0) {
      speakText(text);
    } else {
      speakText('No text detected.');
    }
  };

  const handleSave = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    console.log('Saving file as:', fileName);
    setModalVisible(false);
    setFileName('');
  };

  return (
    <ImageBackground
      source={require('@/assets/images/494860923_3978857252370465_3621238704880107232_n.jpg')}
      style={[styles.background, { width, height }]}
    >
      <View style={styles.overlay} />

      <ScrollView style={styles.textContainer}>
        <Text style={styles.extractedText}>{text || 'No text detected.'}</Text>
      </ScrollView>

      <View style={styles.iconRow}>
        <TouchableOpacity onPress={handleSpeak}>
          <Ionicons name="volume-high-outline" size={width * 0.12} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Ionicons name="save-outline" size={width * 0.12} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Link href="/camera">
            <Ionicons name="refresh-outline" size={width * 0.12} color="white" />
          </Link>
        </TouchableOpacity>
      </View>

      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Save File As</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter file name"
              placeholderTextColor="#aaa"
              value={fileName}
              onChangeText={setFileName}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#888' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#4CAF50' }]}
                onPress={handleConfirm}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.45,
  },
  textContainer: {
    maxHeight: height * 0.5,
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8,
    padding: 10,
  },
  extractedText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 28,
  },
  iconRow: {
    position: 'absolute',
    bottom: height * 0.10,
    left: '10%',
    right: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  saveButton: {
    padding: width * 0.06,
    borderRadius: 50,
    backgroundColor: '#444',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: width * 0.045,
    marginBottom: 20,
    color: '#000',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 12,
    marginHorizontal: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OverlayScreen;
