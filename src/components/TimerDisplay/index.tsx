import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles';

interface ITimerDisplayProps {
  label: string;
  time: string;
  date: string;
}

const TimerDisplay: React.FC<ITimerDisplayProps> = ({label, time, date}) => {
  const opacity = (date === '00/00/00') ? 0 : 1;
  return (
    <View style={styles.container} >
      <Text style={[styles.timeLabel, {opacity}]}>{label}</Text>
      <Text style={[styles.timeHour, {opacity}]}>{time}</Text>
      <Text style={[styles.timeDate, {opacity}]}>{date}</Text>
    </View>
  );
}

export default TimerDisplay;
