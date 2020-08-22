import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../../utils/Styles';
import { shoppingCartState } from '../../providers/shoppingCartProvider';
import BottomButton from '../../components/BottomButton';

function ShoppingCartScreen({ navigation }) {
  const [shoppingCart, dispatch] = shoppingCartState()

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', width: '100%', height: 150, backgroundColor: '#fff', marginTop: 5 }}>

        <View style={{ flex: 1 }}>
          <Image source={item.versions[item.versionIndex].imgUrl} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 3, width: '100%', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ fontWeight: 'bold' }}>{item.price} €</Text>
          </View>
          <View style={{ width: '90%', borderTopWidth: .5 }}></View>
          <View style={{ flex: 1, width: '100%', justifyContent: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ fontWeight: 'bold' }}>QTÉ. {item.quantity}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Icon.Button color='black' name='minus' size={24} style={{ flex: 1, textAlign: "center", backgroundColor: '#fff' }} />
              <Icon.Button color='black' name='plus' size={24} style={{ flex: 1, textAlign: "center", backgroundColor: '#fff' }} />
            </View>
          </View>
        </View>

      </View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#eee' }}>
      <View style={{ alignItems: 'center', height: '88%', width: '100%' }}>
        <FlatList
          data={shoppingCart.items}
          keyExtractor={item => item.id.toString() + item.versionIndex.toString()}
          renderItem={renderItem}
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomButton label='COMMANDER' text={shoppingCart.total + ' €'} onPress={() => navigation.navigate('Delivery')} />
    </View>
  );
}

export default ShoppingCartScreen;