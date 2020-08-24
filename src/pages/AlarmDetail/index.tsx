import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import {Props} from '../../routes/AppStack';
import { IAlarm } from '../../components/AlarmItem';
import IOChart from '../../components/IOChart';

const AlarmDetail: React.FC<Props> = ({ route, navigation } :Props) => {
  const alarm :IAlarm = route.params.alarm;
  
  const handleGoBack = () => navigation.goBack();
  
  return (
    <>
      <View style={ styles.header }>
        <Button title="Voltar" onPress={handleGoBack} />
        <View style={styles.titleContainer}>
          <Text style={ styles.title }>{alarm.alarm_name}</Text>
        </View>
      </View>

      <View style={ styles.container }>
          <IOChart />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    height: 50,
    maxHeight: 50

  },
  titleContainer: {
    paddingStart: '15%',
  },
  container: {
    flex: 1,
    margin: 16,

  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default AlarmDetail;
