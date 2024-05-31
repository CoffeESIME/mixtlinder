import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

// Define the props type, extending the TouchableOpacityProps for any additional props
interface FindYourTrailButtonProps extends TouchableOpacityProps {
  onPress?: () => void; // Make onPress optional if you do not always need it
}

// Use forwardRef with specific type annotation
const FindYourTrailButton = forwardRef<TouchableOpacity, FindYourTrailButtonProps>((props, ref) => {
  return (
    <TouchableOpacity style={styles.findTrailButton} onPress={props.onPress} ref={ref}>
      <Text style={styles.buttonText}>Encuentra tu ruta</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  findTrailButton: {
    backgroundColor: '#34a853', // Greenish background
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
