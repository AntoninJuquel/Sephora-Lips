import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import Styles from '../../utils/Styles';

import { userState } from "../../providers/userProvider";
import { Button, TextInput, Text, Avatar } from 'react-native-paper';
import Users from "../../utils/Users";

function SigninScreen({ navigation }) {
  const [users, setUsers] = useState(Users);
  const [user, dispatch] = userState();

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleConnection = (user) => {
    dispatch(user)
    navigation.navigate('Tab')
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => handleConnection(item)}>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Avatar.Image
            source={{ uri: item.imgUrl }}
            size={50}
          />
          <View style={{marginLeft: 15}}>
            <Text>{item.firstName}</Text>
            <Text>{item.lastName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={Styles.container}>
      <View style={{ flex: 1 }}>
        <TextInput mode="outlined" label='Email' value={email} onChangeText={text => setEmail(text)} />
        <TextInput mode="outlined" secureTextEntry label='Password' value={password} onChangeText={text => setPassword(text)} />
        <Button onPress={() => handleConnection(Users[0])}>Connexion</Button>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Comptes récents</Text>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.imgUrl}
        />
      </View>
    </View>
  );
}

export default SigninScreen;