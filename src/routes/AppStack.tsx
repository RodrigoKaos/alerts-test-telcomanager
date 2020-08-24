import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import AlarmList from '../pages/AlarmList';
import AlarmDetail from '../pages/AlarmDetail';
import { IAlarm } from '../components/AlarmItem';

type AlarmsParamList = {
  Alarms: undefined;
  AlarmDetail :{ alarm: IAlarm };
};

type AlarmDetailScreenNavigationProp = StackNavigationProp<
  AlarmsParamList,
  'AlarmDetail'
>;

type AlarmDetailScreenRouteProp = RouteProp<AlarmsParamList, 'AlarmDetail'>;

export type Props = {
  navigation: AlarmDetailScreenNavigationProp;
  route: AlarmDetailScreenRouteProp;
}

const { Screen, Navigator } = createStackNavigator<AlarmsParamList>();

function AppStack () {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Alarms" component={AlarmList} />
        <Screen name="AlarmDetail" component={AlarmDetail} options={{headerShown: false}} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;