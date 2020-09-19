import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import Styles from '../../utils/Styles';
import Card from '../../components/Card';

import Items from "../../utils/Items";
import { getData, storeData } from '../../functions/AsyncStorage';
import { FAB } from 'react-native-paper';
import AddItem from '../../components/AddItem';
import { userState } from '../../providers/userProvider';

function CategoriesScreen(props) {

    const [user, dispatch] = userState();
    const [categories, setCategories] = useState(Items.categories);
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        function effect() {
            getData("Categories", Items.categories, setCategories)
        }

        effect()
    }, [])

    const addCategory = (category) => {
        let newState = [...categories, category]
        storeData("Categories", newState, setCategories)
        setAdding(false)
    }
    const removeCategory = (category) => {
        let newState = categories.slice(0)
        newState.splice(newState.indexOf(category), 1)
        storeData("Categories", newState, setCategories)
    }
    const renderItem = ({ item }) => {
        return (
            <View>
                {(!item.plusImage && user.admin) ?
                    <View style={{ flexDirection: "row" }}>
                        <FAB icon="close" onPress={() => removeCategory(item)} small style={{ marginTop: 20, backgroundColor: "#c00" }} />
                    </View>
                    : null
                }
                {(item.plusImage && user.admin) ? <FAB icon="plus" small style={{ backgroundColor: '#000' }} onPress={() => setAdding(true)} /> :
                    <Card title={item.name} image={item.imgUrl} click={() => props.navigation.navigate('Products', { categoryId: item.id, categoryName: item.name })} />}
            </View>
        )
    }


    return (
        <View style={Styles.container}>
            {adding ? <AddItem addItem={addCategory} toRender="Categories" setAdding={setAdding} /> : null}
            <FlatList
                data={[...categories, { id: -1, plusImage: true }]}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={{ width: "100%" }}
                contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
            />
        </View>
    );
}

export default CategoriesScreen;