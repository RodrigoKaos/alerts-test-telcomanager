import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { getFormatedDate } from '../../util/getFormatedDate';
import priorityListObj from '../../util/priorityListObj';

import TimerDisplay from '../TimerDisplay';

export interface IAlarm {
  id_alarm: number;
  id_object: number;
  start: number;
  end: number;
  id_priority: number;
  alarm_name: string;
  object_name: string;
  type: string;
}

interface IAlarmItemProps {
  alarm: IAlarm;
}

interface IPriorities {
  [index: number]: object;
}

const AlarmItem: React.FC<IAlarmItemProps> = ( { alarm } :IAlarmItemProps) => {

  const navigation = useNavigation();
  const handleNavigateAlartDetail = () => navigation.navigate('AlarmDetail', {alarm});
  const {id_priority} = alarm;
  const currentPriority: any = (priorityListObj as IPriorities)[id_priority];
  const start = getFormatedDate(alarm.start);
  const end = getFormatedDate(alarm.end);

  return (
    <TouchableOpacity
      onPress={handleNavigateAlartDetail}
      style={styles.container}
    >
      <View style={[styles.labelContainer, {backgroundColor: currentPriority.background_color}]}>
        <Text style={styles.name}>{alarm.alarm_name}</Text>
        <Text style={styles.type}>{alarm.type}: {alarm.object_name}</Text>
        <Text style={styles.level}>{currentPriority.name}</Text>
      </View>

      <View style={styles.timeContainer}>
        <TimerDisplay
          label="INÍCIO"
          time={start.formatedTime}
          date={start.formatedDate}
        />
        <TimerDisplay
          label="FIM"
          time={end.formatedTime}
          date={end.formatedDate}
        />
        
        <View style={styles.menuContainer} >
          <TouchableOpacity>
            <Text style={styles.menuLabel}>...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default AlarmItem;