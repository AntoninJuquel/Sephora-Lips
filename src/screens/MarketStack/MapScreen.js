import React from 'react';
import { View } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import Styles from '../../utils/Styles';
import { shopsState } from '../../providers/shopProvider';

const MapScreen = ({ navigation }) => {
    const [shops, dispatch] = shopsState()
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
                {
                    shops.shops.map(marker => (
                        <Marker
                            key={marker.name}
                            coordinate={{ latitude: marker.lat, longitude: marker.long }}
                            title={marker.name}
                        />
                    ))
                }

            </MapView>
        </View>
    )
}

export default MapScreen;