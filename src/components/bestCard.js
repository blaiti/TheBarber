import React from 'react';
import { 
    View, 
    StyleSheet,
    ImageBackground,
    Text,
} from 'react-native';

import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BestCard = ({navigation, item}) => {

    return (
      <ImageBackground
        style={styles.container}
        source={item.image}
        borderRadius={10}
        resizeMode="cover">

        <View style={styles.topContainer}>
            <Text style={styles.rating}>{item.rating}</Text>
            <Text style={styles.ratingDiv}>/5</Text>
            <Icon name="star" size={25} color="#f9ca24" />
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
        width: 250,
        height: 350,
        padding: 20,
        marginLeft: 20,
        marginRight: 5,
        justifyContent: 'space-between'
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    rating: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h2,
        color: theme.colors.white
    },
    ratingDiv: {
        marginRight: 3,
        fontWeight: '900',
        fontSize: theme.sizes.h5,
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

export default BestCard;