import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import Styles from '../../utils/Styles';
import Card from '../../components/Card';

import Items from "../../utils/Items";
import { getData, storeData } from '../../functions/AsyncStorage';
import { FAB } from 'react-native-paper';
import { userState } from '../../providers/userProvider';
import AddItem from '../../components/AddItem';

function GiftScreen({ navigation, route }) {
  const [products, setProducts] = useState(Items.products)

  const renderItem = ({ item }) => {
    return (
      <View>
        {item.categoryId == -2 && <Card title={item.name} price={item.price} image={item.imgUrl} click={() => navigation.navigate('Item', { item: item })} />}
      </View>
    )
  }

  return (
    <View style={Styles.container}>
      <FlatList
        data={[...products, { id: -1, plusImage: true }]}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={{ width: "100%" }}
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
      />
    </View>
  );
}

export default GiftScreen;