import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import Styles from '../../utils/Styles';
import Card from '../../components/Card';

import Items from "../../utils/Items";

function ProductsScreen({navigation, route}) {
    
    navigation.setOptions({headerTitle: route.params.categoryName.toUpperCase()})
    
    const [products, setProducts] = useState(Items.products)
    
    const renderItem = ({ item }) => (
        (item.categoryId == route.params.categoryId && <Card title={item.name} price={item.price} image={item.imgUrl} click={() => navigation.navigate('Item', { item: item })} />)
    )

    return (
        <View style={Styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={{ width: "100%" }}
                contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
            />
        </View>
    );
}

export default ProductsScreen;