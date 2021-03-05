import React from 'react';
import { 
    View, 
    StyleSheet,
    ImageBackground,
    Text,
} from 'react-native';

import * as theme from '../constants/theme';

const NearCard = ({navigation, item}) => {

    return (
      <ImageBackground
        style={styles.container}
        source={item.image}
        borderRadius={10}
        resizeMode="cover">

        <View style={styles.topContainer}>
            <Text style={styles.rating}>{item.rating}/5</Text>
        </View>
        
        <View style={styles.bottomContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.place}>{item.place}</Text>
        </View>
      </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 155,
        height: 190,
        padding: 20,
        margin: 8,
        justifyContent: 'space-between'
    },
    topContainer: {
        alignItems: 'flex-end'
    },
    rating: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h2,
        color: theme.colors.white
    },
    name: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h2,
        color: theme.colors.white
    },
    place: {
        marginTop: 5,
        fontSize: theme.sizes.h5,
        color: theme.colors.white
    }
});

export default NearCard;