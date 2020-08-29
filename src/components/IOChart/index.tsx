import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Button, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { getDateLabels } from '../../util/getDateLabels';
import generateDataSet from '../../util/generateDataSet';

interface IIOChartProps {
  hoursToRender :number;
  timeInterval :number;
}

export default class IOChart extends Component<IIOChartProps> {
  
  state = {
    isLoaded: false
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({isLoaded: true });
    }, 1000)
  }  

  render() {
    const { hoursToRender, timeInterval } = this.props;
    
    const transferLimit = 10;
    const oneHourInMilliseconds = 1000 * 60 * 60 * 1;
    const dotsLimitPerHour = 12;
    const defaultWidth = 0.9;

    const timePeriod = hoursToRender * oneHourInMilliseconds;
    const dots = timePeriod / timeInterval;
    const additionalWidth = dots / dotsLimitPerHour;
    
    // const aux = dot

    const chartWidth = Dimensions.get('window').width * additionalWidth;// * 0.9//hoursToRender;
    console.log(dots, hoursToRender, dots/ dotsLimitPerHour);
    
    const data = generateDataSet(dots, transferLimit);
    const dateLabels = getDateLabels( timePeriod, timeInterval);

    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      alignItems: 'right',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#1E2923",
      backgroundGradientToOpacity: 0.0,
      color: (opacity = 1) => `rgba(0, 0, 146, ${opacity})`,
      strokeWidth: 1, // optional, default 3
      // barPercentage: 10,
      decimalPlaces: 0,
      useShadowColorFromDataset: false, // optional
      propsForDots: {
        r: "0",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    };
  
    const dataChart = {
      labels: dateLabels,
      datasets: [
        {
          data: data.input,
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // optional
          strokeWidth: 3 // optional
        },
        {
          data: data.output,
          color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // optional
          strokeWidth: 3 // optional
        }
      ],
      //legend: ['Entrada', 'Saída'] // optional
    };
  
    const handleDesalarmar = () => alert('TODO...');
    
    const styles = StyleSheet.create({
      squareLabels: {
        width: 15,
        height: 15,
      },
    });

    return <>
      { !this.state.isLoaded && <ActivityIndicator />
        || <>
        <ScrollView horizontal={true} style={{overflow: 'scroll', maxHeight: 270, marginLeft: -35,}}>
          <LineChart
            style={{ paddingBottom: 65}}
            data={dataChart}
            width={ chartWidth}
            height={220}
            yAxisInterval={1}
            fromZero={true}
            verticalLabelRotation={45}
            chartConfig={chartConfig}
          />
        </ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.squareLabels, { backgroundColor: 'rgba(0, 0, 255, 1)'} ]}></View>
              <Text> Entrada</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.squareLabels, { backgroundColor: 'rgba(0, 128, 0, 1)'} ]}></View>
              <Text> Saída</Text>
            </View>
          </View>
          <View style={{backgroundColor:'#ccc'}} >
            <Button
              onPress={handleDesalarmar}
              title="Desalarmar"
            />
          </View>
        </View>
        </>
      }
    </>
  }
}