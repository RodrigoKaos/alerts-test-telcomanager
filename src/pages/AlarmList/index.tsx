import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import api from '../../services/api';
import AlarmItem, { IAlarm } from '../../components/AlarmItem';

function AlarmList () {

  const [ alarmsArr, setAlarmsArr ] = useState([]);

  async function handleAlarmData () {
    try {
      const { data: payload } = await api.get('alarms');//'c558a2cb-93f5-4fa6-becf-793d6bd22de7');
      const alarmList = payload.data.sort((a: any, b: any) => {
        return a.start < b.start;
      });

      setAlarmsArr( alarmList );

    } catch (error) {
      console.log('Erro:', error);
    }
  }
  
  useEffect( () => { handleAlarmData() }, [] );
  
  return (
    <View>
      {!(alarmsArr.length > 0) && (<Text>Nenhum alarme encontrado</Text>)}
      <ScrollView >
      {
        alarmsArr.map((alarm :IAlarm ) => (
          <AlarmItem
            key={alarm.id_alarm}
            alarm={alarm}
          />
        ))
      }
    </ScrollView>
    </View>
    
  );
}

export default AlarmList;