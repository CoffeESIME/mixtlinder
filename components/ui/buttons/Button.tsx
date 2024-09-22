import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

// Definir la interfaz de props del botón, extendiendo las propiedades de TouchableOpacityProps
interface ButtonProps extends TouchableOpacityProps {
  text: string;
  color: string;
}

// Usar forwardRef para permitir la referencia al componente TouchableOpacity
const Button = forwardRef<TouchableOpacity, ButtonProps>(({ text, color, onPress, ...rest }, ref) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      ref={ref}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
