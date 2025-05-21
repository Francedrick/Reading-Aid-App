import React, { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { useRouter } from 'expo-router';

import TextRecognition from 'react-native-text-recognition';
import ZoomControl from '@/components/ZoomControl';
import PhotoPreviewSection from '@/components/PhotoPreviewSection';

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const cameraRef = useRef<CameraView | null>(null);
  const router = useRouter();

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const handleTakePhoto = async () => {
  if (cameraRef.current) {
    const options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    const takenPhoto = await cameraRef.current.takePictureAsync(options);

    try {
      const result = await TextRecognition.recognize(takenPhoto.uri);
      const extractedText = result.join('\n');

      setPhoto({
        ...takenPhoto,
        extractedText,
      });

      router.push({
        pathname: '/convert',
        params: { text: extractedText },
      });
    } catch (error) {
      console.error('Text recognition failed:', error);
      setPhoto(takenPhoto);
      router.push({
        pathname: '/convert',
        params: { text: '' },
      });
    }
  }
};


  const handleRetakePhoto = () => setPhoto(null);

  const handleUpload = () => {
    router.push('/Upload');
  };

  const handleDropdownOption = (option: string) => {
    setDropdownVisible(false);
    switch (option) {
      case 'Profile':
        router.push('/profile');
        break;
      case 'Settings':
        router.push('/Settings');
        break;
      case 'History':
        router.push('/History');
        break;
      case 'Help & Support':
        router.push('/Help&Support');
        break;
      default:
        Alert.alert('Option not handled');
    }
  };

  if (photo) {
    return (
      <PhotoPreviewSection photo={photo} handleRetakePhoto={handleRetakePhoto} />
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        zoom={zoom === 1 ? 0 : 0.5}
        ref={cameraRef}
      >
        {/* Dropdown button */}
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setDropdownVisible(true)}
        >
          <AntDesign name="ellipsis1" size={28} color="black" />
        </TouchableOpacity>

        {/* Dropdown modal */}
        <Modal transparent visible={dropdownVisible} animationType="fade">
          <TouchableWithoutFeedback onPress={() => setDropdownVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={styles.dropdownMenu}>
                {['Profile', 'Settings', 'History', 'Help & Support'].map(option => (
                  <TouchableOpacity
                    key={option}
                    style={styles.dropdownItem}
                    onPress={() => handleDropdownOption(option)}
                  >
                    <Text style={styles.dropdownText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <ZoomControl zoom={zoom} setZoom={setZoom} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.sideButton} onPress={handleUpload}>
            <AntDesign name="picture" size={36} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cameraButton} onPress={handleTakePhoto}>
            <AntDesign name="camera" size={50} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sideButton} onPress={toggleCameraFacing}>
            <AntDesign name="retweet" size={36} color="black" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  dropdownButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 6,
    borderRadius: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  sideButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 20,
  },
  dropdownMenu: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 180,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  dropdownText: {
    fontSize: 16,
  },
});
