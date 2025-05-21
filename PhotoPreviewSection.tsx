import { Fontisto } from '@expo/vector-icons';
import { CameraCapturedPicture } from 'expo-camera';
import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

const PhotoPreviewSection = ({
  photo,
  handleRetakePhoto
}: {
  photo: CameraCapturedPicture & { extractedText?: string };
  handleRetakePhoto: () => void;
}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.box}>
      <Image
        style={styles.previewConatiner}
        source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
      />
    </View>

    {/* OCR Extracted Text Display */}
    {photo.extractedText && (
      <ScrollView style={styles.textContainer}>
        <Text style={styles.textLabel}>Extracted Text:</Text>
        <Text style={styles.extractedText}>{photo.extractedText}</Text>
      </ScrollView>
    )}

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
        <Fontisto name='trash' size={36} color='black' />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderRadius: 15,
    padding: 1,
    width: '95%',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewConatiner: {
    width: '95%',
    height: '55%',
    borderRadius: 15,
  },
  textContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    maxHeight: '30%',
  },
  textLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  extractedText: {
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PhotoPreviewSection;
