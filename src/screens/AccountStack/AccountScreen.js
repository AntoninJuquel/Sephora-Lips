import React from 'react';
import { View, Image, FlatList } from 'react-native';
import { Text} from "react-native-paper";

import Styles from '../../utils/Styles';
import { userState } from "../../providers/userProvider";
import ArrowButton from '../../components/ArrowButton';

function AccountScreen({navigation}) {
  const [user, dispatch] = userState()
  const options =
    [
      {
        id: 0,
        title: 'Mes achats',
        iconName: 'wallet',
        press: () => navigation.navigate('Purchase')
      },
      {
        id: 1,
        title: 'Mes favoris',
        iconName: 'heart',
        press: () => navigation.navigate('Favorite')
      },
      {
        id: 2,
        title: 'Mon programme de fidélité',
        iconName: 'card-bulleted-settings',
        press: () => navigation.navigate('Fidelity')
      },
      {
        id: 3,
        title: 'Prendre un rendez-vous',
        iconName: 'calendar-edit',
        press: () => navigation.navigate('Appointment')
      },
      {
        id: 4,
        title: 'Mon magasin favoris',
        iconName: 'store',
        press: () => navigation.navigate('FavoriteStore')
      },
      {
        id: 5,
        title: 'Mes paramètres de compte',
        iconName: 'settings',
        press: () => navigation.navigate('Parameter')
      },
      {
        id: 6,
        title: 'Besoin d\'aide',
        iconName: 'help-circle',
        press: () => navigation.navigate('Help')
      },
    ]

  return (
    <View style={Styles.container}>
      <View style={[Styles.cardInfo, { flex: 1 }]}>
        <Image style={{ width: 100, height: 100, borderRadius: 100 }} source={{ uri: user.imgUrl }} />
        <Text style={Styles.lessImportantText}>Bonjour</Text>
        <Text style={Styles.importantText} >{user.firstName} {user.lastName}</Text>
      </View>

      <View style={{ flex: 2, width: '100%', alignItems: 'center', alignContent:'center' }}>
        <FlatList
          data={options}
          renderItem={ArrowButton}
          keyExtractor={item => item.id.toString()}
          style={{width: '100%'}}
          ItemSeparatorComponent={() => (<View style={{width: '90%',alignSelf:'center', borderBottomWidth: 1}}></View>)}
        />
      </View>

    </View>
  );
}

export default AccountScreen;