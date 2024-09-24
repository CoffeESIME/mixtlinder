// components/ui/buttons/Button.js
import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  color: string;
  accessibilityLabel?: string;
}

const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ text, color, onPress, disabled, accessibilityLabel, ...rest }, ref) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: color },
          disabled && styles.disabledButton,
        ]}
        onPress={onPress}
        ref={ref}
        disabled={disabled}
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%', // Asegura que el botón ocupe todo el ancho disponible
  },
  disabledButton: {
    backgroundColor: '#a9a9a9',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
