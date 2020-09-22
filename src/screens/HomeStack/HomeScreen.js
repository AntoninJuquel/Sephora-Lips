import React, { useEffect, useState } from 'react';
import { View, Platform, TouchableOpacity, Image, FlatList } from 'react-native';
import { Text } from 'react-native-paper';

import Swiper from "react-native-deck-swiper";

import Styles from '../../utils/Styles';
import Items from '../../utils/Items'
import { getData } from '../../functions/AsyncStorage';
const Card = ({ card, navigation }) => {



  return (
    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ShopStack', {
      screen: 'Item',
      params: { item: card }
    })}>
      <View style={{
        height: 400,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
      }}>

        <View style={{ flex: 3, width: '100%', height: '100%', backgroundColor: '#fff' }}>
          <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={typeof (card.imgUrl) == 'string' ? { uri: card.imgUrl } : card.imgUrl} />
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>{card.name}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

function HomeScreen({ navigation }) {

  const [products, setProducts] = useState(Items.products)

  useEffect(() => {
    function effect() {
      getData("Products", Items.products, setProducts)
    }

    effect()
  }, [])

  const renderItem = ({item}) => {
    return (
      <Image style={{ width: 500, height: 500 }} source={typeof (item.imgUrl) == 'string' ? { uri: item.imgUrl } : item.imgUrl} />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 0 }}>

      <Swiper
        cards={products.reverse()}
        renderCard={(card) => (card.categoryId ? <Card card={card} navigation={navigation} /> : null)}
        useViewOverflow={Platform.OS === 'ios'}
        stackSize={4}
        stackScale={10}
        stackSeparation={30}
        infinite
        backgroundColor={'transparent'}
      />

    </View>
  );
}
export default HomeScreen;