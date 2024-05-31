import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';


// Define the props type, extending the TouchableOpacityProps for any additional props like 'onPress'
interface ConnectButtonProps extends TouchableOpacityProps {
  onPress: () => void; // You can define more specific types based on your usage
}

// Use forwardRef with specific type annotation
const ConnectButton = forwardRef<TouchableOpacity, ConnectButtonProps>((props, ref) => {
  return (
    <TouchableOpacity style={styles.connectButton} onPress={props.onPress} ref={ref}>
      <Text style={styles.buttonText}>Conecta</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  connectButton: {
    backgroundColor: '#fbbc05', 
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

export default ConnectButton;
