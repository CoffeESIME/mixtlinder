import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FindYourTrailButton = () => {
  return (
    <TouchableOpacity style={styles.findTrailButton} >
      <Text style={styles.buttonText}>Encuentra tu ruta</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  findTrailButton: {
    backgroundColor: '#34a853',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default FindYourTrailButton;
