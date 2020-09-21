import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import Styles from '../../utils/Styles';

import { userState } from "../../providers/userProvider";
import { Button, TextInput, Text, Avatar } from 'react-native-paper';
import Users from "../../utils/Users";
import { getData } from '../../functions/AsyncStorage';

function SigninScreen({ navigation }) {
  const [users, setUsers] = useState(Users);
  const [user, dispatch] = userState();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    function effect() {
      getData("Users", Users, setUsers)
    }

    effect()
  }, [])


  const handleSignin = ({ user, email, password }) => {
    if (user) {
      dispatch(user)
      navigation.navigate('Tab')
    }
    else
      users.forEach(user => {
        if (user.email == email && user.password == password) {
          setEmail('')
          setPassword('')
          dispatch(user)
          navigation.navigate('Tab')
        }
      });
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => handleSignin(item)}>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Avatar.Image
            source={{ uri: item.imgUrl }}
            size={50}
          />
          <View style={{ marginLeft: 15 }}>
            <Text>{item.firstName}</Text>
            <Text>{item.lastName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={Styles.container}>
      <View style={{ flex: 1, padding: 10 }}>
        <TextInput mode="outlined" label='Email' value={email} onChangeText={text => setEmail(text)} />
        <TextInput mode="outlined" secureTextEntry label='Password' value={password} onChangeText={text => setPassword(text)} />
        <View style={{marginTop: 5}}>
          <Button mode="contained" color="#000" onPress={() => handleSignin({ email, password })}>Se connecter</Button>
          <Button color="#000" onPress={() => navigation.navigate('Signup')}>S'inscrire</Button>
        </View>
      </View>
      <View style={{borderTopWidth: 1, width: "90%", alignSelf: 'center'}}></View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Comptes récents</Text>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={users}
          renderItem={renderItem}
          keyExtractor={(item, i) => String(i)}
          style={{marginTop: 10}}
        />
      </View>
    </View>
  );
}

export default SigninScreen;