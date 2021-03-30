import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StopWatch from './src/component/StopWatch';

export default function App() {
  return (
    <View style={styles.container}>
      <StopWatch />
      {/* eslint-disable-next-line */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
