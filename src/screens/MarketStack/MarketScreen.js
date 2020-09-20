import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { shopsState } from '../../providers/shopProvider';
import { FAB } from "react-native-paper";
import Styles from '../../utils/Styles';
import { userState } from '../../providers/userProvider';
import AddItem from '../../components/AddItem';
import { storeData } from '../../functions/AsyncStorage';
import Items from '../../utils/Items';
import AsyncStorage from '@react-native-community/async-storage';

function MarketScreen({ navigation }) {
  const [user] = userState()
  const [shops, dispatch] = shopsState()
  const [adding, setAdding] = useState()

  const getShops = async () => {
    try {
      const jsonData = await AsyncStorage.getItem("Shops")
      dispatch({ shops: jsonData != null ? JSON.parse(jsonData) : Items.shops })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    function effect() {
      getShops()
    }

    effect()
  }, [])

  const addShops = async (shop) => {
    let newState = [...shops.shops, shop]
    try {
      dispatch({ shops: newState })
      const jsonData = JSON.stringify(newState)
      await AsyncStorage.setItem("Shops", jsonData)
    } catch (error) {
      console.log(error)
    }

    setAdding(false)
  }

  const renderItem = ({ item }) => {
    return (
      <View style={[Styles.container, { padding: 20 }]}>

        {(item.plusImage && user.admin) ? <FAB icon="plus" small style={{ backgroundColor: '#000', alignSelf: 'center' }} onPress={() => setAdding(true)} /> :
          <View>
            <Text style={{ lineHeight: 30, fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ lineHeight: 30 }}>{item.address}</Text>
            <Text style={{ fontWeight: "bold" }}>{'Téléphone :\n'.concat(item.phone)}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ borderRadius: 1000, backgroundColor: item.open ? 'green' : 'red', width: 15, height: 15 }} ></View>
              <Text style={{ paddingLeft: 5 }}>{item.open ? 'Ouvert' : 'Fermé'}</Text>
            </View>
          </View>
        }
      </View>
    )
  }

  return (
    <View style={Styles.container}>
      {adding ? <AddItem addItem={addShops} toRender="Shops" setAdding={setAdding} /> : null}
      <FlatList
        data={[...shops.shops, { plusImage: true }]}
        keyExtractor={(item, i) => String(i)}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ backgroundColor: '#000', height: 1, width: '90%', alignSelf: "center" }}></View>}
      />
    </View>
  );
}

export default MarketScreen;