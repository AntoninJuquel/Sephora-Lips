import React from 'react';
import { Text, View } from 'react-native';

import Styles from '../../utils/Styles';
import BottomButton from '../../components/BottomButton';

function PaymentScreen() {
    return (
      <View style={Styles.container}>
        <Text>PaymentScreen works</Text>
        <BottomButton label='PAYER' text={0} onPress={() => console.log('PIGEON')} />
      </View>
    );
  }
  
  export default PaymentScreen;