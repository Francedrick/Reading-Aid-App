import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const historyData = [
  { id: '1', name: 'Image name1' },
  { id: '2', name: 'Image name2' },
  { id: '3', name: 'Image name3' },
  { id: '4', name: 'Image name4' },
  { id: '5', name: 'Image name5' },
];

const HistoryScreen = () => {
  return (
    <View style={styles.outerContainer}>
      <FlatList
        contentContainerStyle={styles.innerContainer}
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageItem}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.imageText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1, // Flex to allow screen space to adjust based on screen size
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05, // Adjust left and right padding dynamically
  },
  innerContainer: {
    paddingVertical: height * 0.05, // Adjust vertical padding based on screen height
    gap: height * 0.02, // Adjust gap between items dynamically
  },
  imageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    padding: width * 0.05, // Adjust padding based on screen width
    marginBottom: height * 0.02, // Adjust bottom margin based on screen height
    borderRadius: 8,
  },
  imagePlaceholder: {
    width: width * 0.18, // Responsive width
    height: width * 0.18, // Keep square aspect ratio
    backgroundColor: '#ccc',
    marginRight: width * 0.05, // Dynamic margin
  },
  imageText: {
    fontSize: width * 0.07, // Adjust font size based on screen width
  },
});
