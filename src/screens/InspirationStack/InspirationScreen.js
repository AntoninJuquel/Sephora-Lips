import React from 'react';
import { FlatList, Linking, Text, TouchableOpacity, View, Image } from 'react-native';

import Styles from '../../utils/Styles';
import Items from "../../utils/Items";

function InspirationScreen() {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => Linking.openURL('instagram://user?username='.concat(item.auteur))}>
        <View style={{ flexDirection: "row", padding: 20 }}>
          <View style={{ width: 100, height: 100}}>
            <Image style={{width: '100%', height: '100%'}} source={{uri : item.imgUrl}} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{"@".concat(item.auteur)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={Styles.container}>
      <FlatList
        data={Items.Inspirations}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ backgroundColor: '#000', height: 1, width: '90%', alignSelf: "center" }}></View>}
      />
    </View>
  );
}

export default InspirationScreen;