import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.timerHeader}>
        <View>
          <Text style={styles.timer}>00:00.00</Text>
        </View>
      </View>
      <View>
        <Text>Start</Text>
      </View>
      {/* eslint-disable-next-line */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 最後に黒にする
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timerHeader: {
    backgroundColor: '#000000',
    height: 375,
    // 上下方向
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
  },
  timer: {
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: 90,
    lineHeight: 100,
    fontWeight: '200',
    marginBottom: 80,
    width: '100%',
  },
});
