import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window');

const SettingsScreen = () => {
  const [fontSizeOpen, setFontSizeOpen] = useState(false);
  const [fontStyleOpen, setFontStyleOpen] = useState(false);
  const [textBorderOpen, setTextBorderOpen] = useState(false);

  const fontSizes = ['Small', 'Medium', 'Large'];
  const fontStyles = ['Normal', 'Italic', 'Bold'];
  const textBorders = ['None', 'Thin', 'Thick'];

  const renderOptions = (options, onSelect) => (
    <FlatList
      data={options}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.dropdownItem} onPress={() => onSelect(item)}>
          <Text style={styles.dropdownText}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        {/* Font Size */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => setFontSizeOpen(!fontSizeOpen)}
        >
          <Text style={styles.optionText}>FONT SIZE ▼</Text>
        </TouchableOpacity>
        {fontSizeOpen && renderOptions(fontSizes, (item) => {
          console.log('Font Size Selected:', item);
          setFontSizeOpen(false);
        })}

        {/* Font Style */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => setFontStyleOpen(!fontStyleOpen)}
        >
          <Text style={styles.optionText}>FONT STYLE ▼</Text>
        </TouchableOpacity>
        {fontStyleOpen && renderOptions(fontStyles, (item) => {
          console.log('Font Style Selected:', item);
          setFontStyleOpen(false);
        })}

        {/* Text Border */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => setTextBorderOpen(!textBorderOpen)}
        >
          <Text style={styles.optionText}>TEXT BORDER ▼</Text>
        </TouchableOpacity>
        {textBorderOpen && renderOptions(textBorders, (item) => {
          console.log('Text Border Selected:', item);
          setTextBorderOpen(false);
        })}
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: height * 0.05,
  },
  innerContainer: {
    paddingHorizontal: width * 0.08,
    gap: 20,
  },
  option: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: 6,
  },
  optionText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  dropdownText: {
    fontSize: 18,
  },
});
