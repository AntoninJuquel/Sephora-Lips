import React from 'react';
import { View } from 'react-native';
import { FAB } from "react-native-paper";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import Styles from '../../utils/Styles';

const MapScreen = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{
                    flex: 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
                region={{
                    latitude: 48.8534,
                    longitude: 2.3488,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
            >
                {/* {
                    markers.map(marker => (
                        <Marker
                            key={marker[0]}
                            coordinate={{ latitude: marker[1][0], longitude: marker[1][1] }}
                            title={marker[0]}
                        />
                    ))
                }
                <Polyline
                    coordinates={markers.map(marker => (
                        {
                            latitude: marker[1][0],
                            longitude: marker[1][1]
                        }
                    ))}
                    strokeColor={Colors.textColor}
                    strokeWidth={3}
                /> */}

            </MapView>
        </View>
    )
}

export default MapScreen;