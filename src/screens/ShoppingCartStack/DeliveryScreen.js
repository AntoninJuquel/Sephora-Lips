import React from 'react';
import { Text, View } from 'react-native';

import Styles from '../../utils/Styles';
import BottomButton from '../../components/BottomButton';

function DeliveryScreen({navigation}) {
    return (
      <View style={Styles.container}>
        <Text>DeliveryScreen works</Text>
        <BottomButton label='VALIDER' text={0} onPress={() => navigation.navigate('Payment')} />
      </View>
    );
  }
  
  export default DeliveryScreen;