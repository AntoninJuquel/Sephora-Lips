import React from 'react';
import { View, FlatList } from 'react-native';

import Styles from '../../utils/Styles';
import Card from '../../components/Card';

import Items from "../../utils/Items";

function ProductsScreen(props) {

    props.navigation.setOptions({headerTitle: props.route.params.categoryName.toUpperCase()})
    
    const renderItem = ({ item }) => (
        (item.categoryId == props.route.params.categoryId && <Card title={item.name} price={item.price} image={item.imgUrl} click={() => props.navigation.navigate('Item', { item: item })} />)
    )

    return (
        <View style={Styles.container}>
            <FlatList
                data={Items.products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={{ width: "100%" }}
                contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
            />
        </View>
    );
}

export default ProductsScreen;