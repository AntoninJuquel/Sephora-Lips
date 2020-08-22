import React from 'react';
import { View, Platform, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';

import Swiper from "react-native-deck-swiper";

import Styles from '../../utils/Styles';
import Items from '../../utils/Items'
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
          <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={card.imgUrl} />
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>{card.name}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

function HomeScreen({ navigation }) {
  const DATA = [...Items.products]
  const [index, setIndex] = React.useState()

  const onSwiped = () => {
    setIndex((index + 1) % DATA.length)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 0 }}>

      <Swiper
        cards={DATA}
        cardIndex={index}
        renderCard={(card) => <Card card={card} navigation={navigation} />}
        useViewOverflow={Platform.OS === 'ios'}
        onSwiper={onSwiped}
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