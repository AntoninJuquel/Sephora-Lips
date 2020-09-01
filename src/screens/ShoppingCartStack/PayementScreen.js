import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../../utils/Styles';
import BottomButton from '../../components/BottomButton';
import { shoppingCartState } from '../../providers/shoppingCartProvider';

function PaymentScreen({ navigation }) {
  const [shoppingCart, dispatch] = shoppingCartState()

  const handlePress = () => {
    dispatch({ items: [], total: 0, delivery: {} })
    navigation.reset({
      index: 0,
      routes: [{ name: 'ShoppingCart' }],
    })
    navigation.navigate('Home')
  }

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
    <View style={Styles.container}>
      <View style={{ alignItems: 'center', height: '88%', width: '100%', marginBottom: '12%' }}>
        <FlatList
          data={shoppingCart.items}
          keyExtractor={item => item.id.toString() + item.versionIndex.toString()}
          renderItem={renderItem}
          style={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
        />
        <View style={{ flexDirection: 'row', width: '100%', height: 150, backgroundColor: '#fff', marginTop: 5 }}>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 3, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{shoppingCart.delivery.name}</Text>
              <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{shoppingCart.delivery.desc}</Text>
              <Text style={{ fontWeight: 'bold', textAlign: "center" }}>{shoppingCart.delivery.price > 0 ? shoppingCart.delivery.price + " €" : "GRATUIT"}</Text>
            </View>
          </View>

        </View>
      </View>
      <BottomButton label='PAYER' text={shoppingCart.total + ' €'} onPress={handlePress} />
    </View>
  );
}

export default PaymentScreen;