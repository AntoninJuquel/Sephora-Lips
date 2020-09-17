import React, { useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import Styles from '../../utils/Styles';
import Card from '../../components/Card';

import Items from "../../utils/Items";

function CategoriesScreen(props) {

    const [categories, setCategories] = useState(Items.categories)

    const renderItem = ({ item }) => (
        <Card title={item.name} image={item.imgUrl} click={() => props.navigation.navigate('Products', { categoryId: item.id, categoryName: item.name })} />
    )
    return (
        <View style={Styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={{ width: "100%" }}
                contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
            />
        </View>
    );
}

export default CategoriesScreen;