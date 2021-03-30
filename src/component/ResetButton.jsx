import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LapButton() {
  return (
    <View style={styles.buttonLapCircle}>
      <Text style={styles.buttonLapLabel}>Lap</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonLapCircle: {
    backgroundColor: 'rgba(40,42,55,0.5)',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLapLabel: {
    color: '#83859F',
    fontSize: 16,
  },
});
