import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StartButton() {
  return (
    <View style={styles.buttonStartCircle}>
      <Text style={styles.buttonStartLabel}>Start</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStartCircle: {
    backgroundColor: 'rgba(52,87,50,0.5)',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStartLabel: {
    color: '#3AC219',
    fontSize: 16,
  },
});
