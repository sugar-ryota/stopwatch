import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableHighlight,
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 経過時間
      timeElapsed: null,
      // タイマーが動いているかどうか
      running: false,
      startTime: 0,
      stopTime: 0,
      laps: [],
    };
    // それぞれ作成した関数でthisを正しく認識するためbindしている
    this.handleStartPress = this.handleStartPress.bind(this);
    this.handleLapPress = this.handleLapPress.bind(this);
    this.handleStopPress = this.handleStopPress.bind(this);
    this.handleResetPress = this.handleResetPress(this);
  }

  handleStartPress() {
    this.setState({ startTime: new Date() - this.state.stopTime });

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true,
      });
    }, 30);
  }

  handleStopPress() {
    // タイマーを止める
    clearInterval(this.interval);
    this.setState({
      running: false,
      stopTime: this.state.timeElapsed,
    });
  }

  handleLapPress() {
    // eslint-disable-next-line react/destructuring-assignment
    const currentLapTime = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      // eslint-disable-next-line react/destructuring-assignment
      laps: this.state.laps.concat([currentLapTime]),
    });
  }

  handleResetPress() {

  }

  renderStartStopButton() {
    const style = this.state.running ? styles.stopButton : styles.startButton;

    return (
      <TouchableHighlight
        style={[styles.button, style]}
        underlayColor="gray"
        onPress={this.state.running ? this.handleStopPress : this.handleStartPress}
      >
        <Text style={this.state.running ? styles.stopLabel : styles.startLabel}>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    );
  }

  renderLapButton() {
    // 変える
    const style = this.state.running ? styles.resetButton : styles.lapButton;
    return (
      <TouchableHighlight
        style={[styles.button, style]}
        underlayColor="gray"
        onPress={this.handleLapPress}
      >
        <Text style={this.state.running ? styles.resetLabel : styles.lapLabel}>
          {this.state.running ? 'Reset' : 'Lap'}
        </Text>
      </TouchableHighlight>
    );
  }

  renderLaps() {
    return (
      <View>
        {this.state.laps.map((time, index) => (
          <View style={styles.lap} key={index}>
            {/* eslint-disable-next-line */}
            <Text style={styles.lapText}>Lap #{index + 1}</Text>
            <Text style={styles.lapText}>{formatTime(time)}</Text>
          </View>
        ))}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timerHeader}>
          <View>
            <Text style={styles.timer}>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>
        </View>
          <View style={styles.buttonItem}>
            {this.renderLapButton()}
            {this.renderStartStopButton()}
          </View>

        <View style={styles.footer}>
          {this.renderLaps()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'green',
    width: '100%',
    justifyContent: 'flex-start',
  },
  timerHeader: {
    backgroundColor: '#000000',
    height: 375,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
  },
  timer: {
    fontSize: 60,
    color: '#ffffff',
    // eslint-disable-next-line no-dupe-keys
    fontSize: 85,
    lineHeight: 100,
    fontWeight: '200',
    marginBottom: 80,
  },
  buttonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 110,
    backgroundColor: 'black',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: 'rgba(52,87,50,0.5)',
    marginRight: 20,
  },
  startLabel: {
    color: '#3AC219',
    fontSize: 16,
  },
  stopButton: {
    backgroundColor: 'rgba(108,3,19,0.5)',
    marginRight: 20,
  },
  stopLabel: {
    color: '#C70E2A',
    fontSize: 16,
  },
  lapButton: {
    backgroundColor: 'rgba(40,42,55,0.5)',
    marginLeft: 20,
  },
  lapLabel: {
    color: '#83859F',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#212121',
    marginLeft: 20,
  },
  resetLabel: {
    color: '#E0E0E0',
    fontSize: 16,
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  lapText: {
    fontSize: 30,
    color: '#E0E0E0',
  },
});

export default StopWatch;
