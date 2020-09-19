import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';

import Styles from '../../utils/Styles';
import * as ImagePicker from 'expo-image-picker';

import { userState } from "../../providers/userProvider";
import { Button, TextInput, Text, Avatar, FAB } from 'react-native-paper';
import Users from "../../utils/Users";
import { getData, storeData } from '../../functions/AsyncStorage';

function SignupScreen({ navigation }) {
    const [users, setUsers] = useState(Users);
    const [user, dispatch] = userState();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        function effect() {
            getData("Users", Users, setUsers)
        }

        effect()
    }, [])

    const openImagePickerAsync = async () => {
        console.log(imgUrl)
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setImgUrl(pickerResult.uri);
    }

    const handleSingnup = () => {
        let newUser = { email, password, lastName, firstName, imgUrl: (imgUrl == '' || imgUrl == undefined ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' : imgUrl), admin: false, social: '@'.concat(firstName.toLowerCase(), lastName.toLowerCase()) }
        let newState = [...users, newUser];
        storeData("Users", newState, (e) => console.log(e))
    }

    return (
        <ScrollView style={Styles.container}>
                <TouchableOpacity onPress={openImagePickerAsync} >
                    <View style={{ width: 150, height: 150, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 10000 }} >
                        {imgUrl == '' || imgUrl == undefined ? <FAB small style={{ backgroundColor: '#000' }} icon="file-image-outline" /> :
                            <Image style={{ width: '100%', height: '100%' }} source={{ uri: imgUrl }} />
                        }
                    </View>
                </TouchableOpacity>

                <TextInput mode="outlined" label='Nom' value={lastName} onChangeText={text => setLastName(text)} />
                <TextInput mode="outlined" label='Prénom' value={firstName} onChangeText={text => setFirstName(text)} />
                <TextInput mode="outlined" label='Email' value={email} onChangeText={text => setEmail(text)} />
                <TextInput mode="outlined" secureTextEntry label='Mot de passe' value={password} onChangeText={text => setPassword(text)} />
                <TextInput mode="outlined" secureTextEntry label='Confirmer mot de passe' />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button onPress={() => navigation.navigate('Signin')}>Se connecter</Button>
                    <Button onPress={handleSingnup}>S'inscrire</Button>
                </View>
        </ScrollView>
    );
}

export default SignupScreen;