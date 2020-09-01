import React from 'react';
import { Text, View, FlatList,TouchableOpacity } from 'react-native';

import Styles from '../../utils/Styles';
import BottomButton from '../../components/BottomButton';

import Items from "../../utils/Items";
import { shoppingCartState, updatePrice } from '../../providers/shoppingCartProvider';

function DeliveryScreen({ navigation }) {

  const [shoppingCart, dispatch] = shoppingCartState()

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => dispatch({ delivery: item, total: updatePrice(shoppingCart) })}>
        <View style={{ flexDirection: 'row', width: '100%', height: 150, backgroundColor: (shoppingCart.delivery === item ? 'red' : '#fff'), marginTop: 5 }}>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 3, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{item.name}</Text>
              <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{item.desc}</Text>
              <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{item.price > 0 ? item.price + " €" : "GRATUIT"}</Text>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={Styles.container}>
      <View style={{ alignItems: 'center', height: '88%', width: '100%', marginBottom: '12%' }}>
        <FlatList
          data={Items.deliveries}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomButton label='VALIDER' text={shoppingCart.total + " €"} onPress={() => navigation.navigate('Payment')} />
    </View>
  );
}

export default DeliveryScreen;