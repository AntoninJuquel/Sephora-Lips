import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import Styles from '../../utils/Styles';
import Card from '../../components/Card';

import Items from "../../utils/Items";
import { getData, storeData } from '../../functions/AsyncStorage';
import { FAB } from 'react-native-paper';
import { userState } from '../../providers/userProvider';

function ProductsScreen({ navigation, route }) {

    const [user, dispatch] = userState();

    navigation.setOptions({ headerTitle: route.params.categoryName.toUpperCase() })

    const [products, setProducts] = useState(Items.products)

    getData("Products", Items.products, setProducts);

    const renderItem = ({ item }) => {
        return (
            (item.plusImage && user.admin) ? <FAB icon="plus" small style={{backgroundColor: '#000'}} onPress={() => console.log('Pressed')} /> :
            item.categoryId == route.params.categoryId && <Card title={item.name} price={item.price} image={item.imgUrl} click={() => navigation.navigate('Item', { item: item })} />
        )
    }

    return (
        <View style={Styles.container}>
            <FlatList
                data={[...products, {id: -1, plusImage: true }]}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={{ width: "100%" }}
                contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
            />
        </View>
    );
}

export default ProductsScreen;