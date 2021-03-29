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
      <View style={styles.buttonItem}>
        <View style={styles.buttonLapCircle}>
          <Text style={styles.buttonLapLabel}>Lap</Text>
        </View>
        <View style={styles.buttonStartCircle}>
          <Text style={styles.buttonStartLabel}>Start</Text>
        </View>
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
    backgroundColor: '#000000',
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
    fontSize: 85,
    lineHeight: 100,
    fontWeight: '200',
    marginBottom: 80,
    width: '100%',
  },
  buttonItem: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 110,
    width: '100%',
    alignItems: 'center',
  },
  buttonLapCircle: {
    backgroundColor: 'rgba(40,42,55,0.5)',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStartCircle: {
    backgroundColor: 'rgba(52,87,50,0.5)',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLapLabel: {
    color: '#83859F',
    fontSize: 16,
  },
  buttonStartLabel: {
    color: '#3AC219',
    fontSize: 16,
  },
});
