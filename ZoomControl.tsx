import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ZoomControlProps = {
  zoom: number;
  setZoom: (zoom: number) => void;
};

export default function ZoomControl({ zoom, setZoom }: ZoomControlProps) {
  return (
    <View style={styles.zoomContainer}>
      <TouchableOpacity
        style={[styles.zoomButton, zoom === 1 && styles.zoomButtonActive]}
        onPress={() => setZoom(1)}
      >
        <Text style={styles.zoomText}>1x</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.zoomButton, zoom === 2 && styles.zoomButtonActive]}
        onPress={() => setZoom(2)}
      >
        <Text style={styles.zoomText}>2x</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  zoomContainer: {
    position: 'absolute',
    bottom: 140,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 10,
  },
  zoomButton: {
    backgroundColor: 'rgba(128,128,128,0.6)',
    marginHorizontal: 8,
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  zoomButtonActive: {
    backgroundColor: 'rgba(64,64,64,0.9)',
  },
  zoomText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
