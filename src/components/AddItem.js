import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import { Button, FAB, Menu, Text, TextInput } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import { getData } from "../functions/AsyncStorage";
import Items from "../utils/Items";
import { shopsState } from "../providers/shopProvider";

function AddItem({ addItem, toRender, setAdding }) {

    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setImgUrl(pickerResult.uri);
    }

    const renderProducts = () => {
        const [price, setPrice] = useState('');
        const [visible, setVisible] = useState(false);
        const [category, setCategory] = useState('');
        const [description, setDescription] = useState('');

        const [categories, setCategories] = useState(Items.categories);
        const [products, setProducts] = useState(Items.products);

        useEffect(() => {
            function effect() {
                getData("Categories", Items.categories, setCategories)
                getData("Products", Items.products, setProducts)
            }

            effect()
        }, [])



        return (

            <View>
                <TextInput label='Prix' keyboardType="number-pad" value={price} onChangeText={price => setPrice(price)} />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <Menu
                        visible={visible}
                        onDismiss={() => setVisible(false)}
                        anchor={<Button onPress={() => setVisible(true)}>{category == '' ? "Choisir une catégorie" : category.name}</Button>}>
                        <ScrollView>
                            {
                                categories.map((element, i) =>
                                    (
                                        <Menu.Item key={String(i)} onPress={() => { setVisible(false); setCategory({ name: element.name, id: element.id }) }} title={element.name} />
                                    )
                                )}
                        </ScrollView>
                    </Menu>
                </View>

                <TextInput label='Déscription' value={description} onChangeText={description => setDescription(description)} multiline={true} />

                <TouchableOpacity onPress={openImagePickerAsync} >
                    <View style={{ width: 250, height: 250, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        {imgUrl == '' || imgUrl == undefined ? <FAB small style={{ backgroundColor: '#000' }} icon="file-image-outline" /> :
                            <Image style={{ width: '100%', height: '100%' }} source={{ uri: imgUrl }} />
                        }
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Button onPress={() => setAdding(false)}>
                        <Text>Annuler</Text>
                    </Button>
                    <Button onPress={() => addItem({ id: products.length, name, imgUrl, categoryId: category.id, price, description, versions: [{ color: '#fff', imgUrl }] })}>
                        <Text>Ajouter</Text>
                    </Button>
                </View>
            </View >
        )
    }

    const renderCategories = () => {
        const [categories, setCategories] = useState(Items.categories);

        useEffect(() => {
            function effect() {
                getData("Categories", Items.categories, setCategories)
            }

            effect()
        }, [])

        return (
            <View>
                <TouchableOpacity onPress={openImagePickerAsync} >
                    <View style={{ width: 250, height: 250, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        {imgUrl == '' || imgUrl == undefined ? <FAB small style={{ backgroundColor: '#000' }} icon="file-image-outline" /> :
                            <Image style={{ width: '100%', height: '100%' }} source={{ uri: imgUrl }} />
                        }
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Button onPress={() => setAdding(false)}>
                        <Text>Annuler</Text>
                    </Button>
                    <Button onPress={() => addItem({ id: categories.length, name, imgUrl })}>
                        <Text>Ajouter</Text>
                    </Button>
                </View>
            </View>
        )
    }

    const renderShops = () => {
        const [shops] = shopsState();
        const [address, setAddress] = useState();
        const [phone, setPhone] = useState();

        return (
            <View>
                <TextInput label='Adresse' value={address} onChangeText={address => setAddress(address)} />
                <TextInput label='Téléphone' keyboardType="number-pad" value={phone} onChangeText={phone => setPhone(phone)} />
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Button onPress={() => setAdding(false)}>
                        <Text>Annuler</Text>
                    </Button>
                    <Button onPress={() => addItem({ id: shops.shops.length, name, address, phone, open: true, lat : 48.83324, long:  2.38668})}>
                        <Text>Ajouter</Text>
                    </Button>
                </View>
            </View>
        )
    }

    return (
        <View>
            <TextInput label='Nom' value={name} onChangeText={name => setName(name)} />
            {toRender == "Products" && renderProducts()}
            {toRender == "Categories" && renderCategories()}
            {toRender == "Shops" && renderShops()}
        </View>
    )
}

export default AddItem