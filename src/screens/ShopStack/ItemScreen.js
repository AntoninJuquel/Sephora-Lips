import React, { useState } from 'react';
import { View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

import { shoppingCartState } from '../../providers/shoppingCartProvider';
import Styles from '../../utils/Styles';
import BottomButton from '../../components/BottomButton';

function ItemScreen({ route, navigation }) {

    const item = route.params.item;
    const versions = [...item.versions]

    navigation.setOptions({ headerTitle: item.name.toUpperCase() })

    const [shoppingCart, dispatch] = shoppingCartState()
    const [imageIndex, setImageIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => setImageIndex(versions.indexOf(item))}>
                <View style={{ marginLeft: 10, width: 50, height: 50, backgroundColor: item.color }}></View>
            </TouchableOpacity>
        )
    }

    const addToCart = (item) => {
        const currentItem = { ...item, versionIndex: imageIndex, quantity }
        const newShoppingCart = shoppingCart

        let contains = false
        let index = 0

        newShoppingCart.items.forEach((element,i) => {
            if(element.id === currentItem.id && element.versionIndex === currentItem.versionIndex){
                contains = true;
                index = i;
            }
        });

        if (contains) {
            newShoppingCart.items[index].quantity += quantity

        } else {
            newShoppingCart.items.push(currentItem)
            
        }
        dispatch({ items: newShoppingCart.items, total: newShoppingCart.total })
    }
    // TO DO CLEAN UP
    return (
        <View style={{ flex: 1 }}>

            <BottomButton onPress={() => addToCart(item)} label='AJOUTER AU PANIER' text={item.price + ' €'} />

            <ScrollView showsVerticalScrollIndicator={false} style={{
                flex: 1,
                backgroundColor: '#eee',
            }}>
                <View style={{ backgroundColor: '#fff', width: '100%', height: 550 }}>
                    <View style={{ flex: 3, backgroundColor: '#fff' }}>
                        <Image
                            source={item.versions[imageIndex].imgUrl}
                            style={{width: '100%', height:'100%'}}
                        />
                    </View>

                    <View style={{ width: '90%', borderBottomWidth: 1, alignSelf: 'center' }}></View>

                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 24 }}>{item.name}</Text>
                        </View>
                        <FlatList
                            data={item.versions}
                            renderItem={renderItem}
                            keyExtractor={item => item.color}
                            horizontal={true}
                            style={{ flex: 1 }}
                            contentContainerStyle={{ alignItems: 'center' }}
                            showsHorizontalScrollIndicator={false}
                        />
                        <View style={{ width: '100%' }}>
                            <Text style={{ textAlign: 'left' }}>{versions[imageIndex].color}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: '#fff', width: '100%', marginTop: 20 }}>
                    <View>
                        <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 24 }}>Description</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 13 }} >{item.description}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ItemScreen;