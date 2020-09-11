import React from 'react';
import { View } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from '../utils/Styles';
import { userState } from '../providers/userProvider';

function DrawerContent(props) {
    const [user, dispatch] = userState()
    return (
        <View style={Styles.drawerContent}>
            <DrawerContentScrollView {...props}>
                <View style={Styles.drawerContent}>

                    {user.imgUrl ? <View style={Styles.userInfoSection}>
                        <View style={Styles.row}>
                            <Avatar.Image
                                source={{ uri: user.imgUrl }}
                                size={50}
                            />
                            <View style={Styles.column}>
                                <Title style={Styles.title}>{user.firstName} {user.lastName}</Title>
                                <Caption style={Styles.caption}>{user.social}</Caption>
                            </View>
                        </View>

                        <View style={Styles.row}>
                            <View style={Styles.section}>
                                <Paragraph style={[Styles.paragraph, Styles.caption]}>{user.fidelity}</Paragraph>
                                <Caption style={Styles.caption}> Pts de fidélités</Caption>
                            </View>
                        </View>
                    </View> :
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    name='login'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Se connecter"
                            onPress={() => props.navigation.navigate('Sign')}
                        />
                    }

                    <Drawer.Section style={Styles.drawerSection}>
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    name='home'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Accueil"
                            onPress={() => props.navigation.navigate('Tab', { screen: 'HomeStack' })}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    name='shopping-search'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Shopping"
                            onPress={() => props.navigation.navigate('Tab', { screen: 'ShopStack' })}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    name='map-marker'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Magasins"
                            onPress={() => props.navigation.navigate('Tab', { screen: 'MarketStack' })}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    name='television-guide'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Inspirations"
                            onPress={() => props.navigation.navigate('Tab', { screen: 'InspirationStack' })}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    name='account'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Mon compte"
                            onPress={() => props.navigation.navigate('Tab', { screen: 'AccountStack' })}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    name='settings'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Mes paramètres de compte"
                            onPress={() => props.navigation.navigate('AccountStack', { screen: 'Parameter' })}
                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    name='help-circle'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Besoin d'aide"
                            onPress={() => props.navigation.navigate('AccountStack', { screen: 'Help' })}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            {user.admin ? <Drawer.Section style={Styles.bottomDrawerSection} >
                <Drawer.Item
                    icon={({ color, size }) => (
                        <Icon
                            name='remote-desktop'
                            color={color}
                            size={size}
                        />
                    )}
                    label="ADMINISTRATEUR"
                    onPress={() => props.navigation.navigate('AdminStack')}
                />
            </Drawer.Section> : null}
            {user.imgUrl ? <Drawer.Section style={Styles.bottomDrawerSection} >
                <Drawer.Item
                    icon={({ color, size }) => (
                        <Icon
                            name='logout'
                            color={color}
                            size={size}
                        />
                    )}
                    label="Se déconnecter"
                    onPress={() => dispatch({
                        firstName: '',
                        lastName: '',
                        social: '',
                        imgUrl: '',
                        fidelity: '',
                        admin: ''
                    })}
                />
            </Drawer.Section> : null}
        </View>
    )
}

export default DrawerContent