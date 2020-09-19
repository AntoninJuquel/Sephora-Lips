import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import Styles from '../../utils/Styles';
import Card from '../../components/Card';

import Items from "../../utils/Items";
import { getData, storeData } from '../../functions/AsyncStorage';
import { FAB } from 'react-native-paper';
import { userState } from '../../providers/userProvider';
import AddItem from '../../components/AddItem';

function ProductsScreen({ navigation, route }) {
    navigation.setOptions({ headerTitle: route.params.categoryName.toUpperCase() })

    const [user, dispatch] = userState();
    const [adding, setAdding] = useState(false);
    const [products, setProducts] = useState(Items.products)

    useEffect(() => {
        function effect() {
            getData("Products", Items.products, setProducts)
        }

        effect()
    }, [])

    const addProduct = (product) => {
        let newState = [...products,product]
        storeData("Products", newState, setProducts)
        setAdding(false)
    }
    const removeProduct = (product) => {
        let newState = products.slice(0)
        newState.splice(newState.indexOf(product), 1)
        storeData("Products", newState, setProducts)
    }

    const renderItem = ({ item }) => {
        return (
            <View>
                {(!item.plusImage && user.admin && item.categoryId == route.params.categoryId) ?
                    <View style={{ flexDirection: "row" }}>
                        <FAB icon="close" onPress={() => removeProduct(item)} small style={{ marginTop: 20, backgroundColor: "#c00" }} />
                    </View>
                    : null
                }
                {(item.plusImage && user.admin) ? <FAB icon="plus" small style={{ backgroundColor: '#000' }} onPress={() => setAdding(true)} /> :
                    item.categoryId == route.params.categoryId && <Card title={item.name} price={item.price} image={item.imgUrl} click={() => navigation.navigate('Item', { item: item })} />}
            </View>
        )
    }

    return (
        <View style={Styles.container}>
            {adding ? <AddItem addItem={addProduct} toRender="Products" setAdding={setAdding} /> : null}
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

export default ProductsScreen;