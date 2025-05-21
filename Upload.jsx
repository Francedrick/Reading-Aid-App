import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import TextRecognition from 'react-native-text-recognition';

const { width } = Dimensions.get('window');

const CameraGalleryScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumAssets, setAlbumAssets] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Grant media access to use this feature.');
        return;
      }
      setHasPermission(true);

      const fetchedAlbums = await MediaLibrary.getAlbumsAsync();
      setAlbums(fetchedAlbums);
      if (fetchedAlbums.length > 0) {
        setSelectedAlbum(fetchedAlbums[0]);
      }
    })();
  }, []);

  useEffect(() => {
    const fetchAssets = async () => {
      if (selectedAlbum) {
        const media = await MediaLibrary.getAssetsAsync({
          album: selectedAlbum.id,
          mediaType: ['photo'],
          first: 100,
          sortBy: [['creationTime', false]],
        });
        setAlbumAssets(media.assets);
      }
    };

    fetchAssets();
  }, [selectedAlbum]);

  const handleImagePress = async (uri) => {
    setLoading(true);
    try {
      const result = await TextRecognition.recognize(uri);
      const extractedText = result.join(' ');
      router.push({
        pathname: '/overlay',
        params: { text: extractedText },
      });
    } catch (error) {
      Alert.alert('Error', 'Text recognition failed.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderImageItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.uri)} style={styles.imageBox}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </TouchableOpacity>
  );

  const renderAlbumDropdown = () => (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedAlbum?.id}
        onValueChange={(itemValue) => {
          const selected = albums.find((album) => album.id === itemValue);
          setSelectedAlbum(selected);
        }}
        style={styles.picker}
      >
        {albums.map((album) => (
          <Picker.Item key={album.id} label={album.title} value={album.id} />
        ))}
      </Picker>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cameraPreview}>
        <TouchableOpacity style={styles.cameraBorder} onPress={() => router.push('/camera')}>
          <MaterialCommunityIcons name="camera-outline" size={70} color="#fff" />
        </TouchableOpacity>
      </View>

      {renderAlbumDropdown()}

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#000" />
          <Text>Recognizing text...</Text>
        </View>
      )}

      <FlatList
        data={albumAssets}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderImageItem}
        contentContainerStyle={styles.galleryContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  cameraPreview: {
    height: 220,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraBorder: {
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 60,
    padding: 15,
  },
  pickerContainer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  galleryContainer: {
    padding: 6,
  },
  imageBox: {
    width: width / 3 - 12,
    height: width / 3 - 12,
    margin: 3,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loadingOverlay: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 20,
    borderRadius: 10,
    zIndex: 1,
  },
});

export default CameraGalleryScreen;
