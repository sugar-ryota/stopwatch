import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StopWatch from './src/component/StopWatch';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.timerHeader}>
        <View>
          <Text style={styles.timer}>00:00.00</Text>
        </View>
      </View>
      <View style={styles.buttonItem}>
        <LapButton />
        <StartButton />
      </View> */}
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
