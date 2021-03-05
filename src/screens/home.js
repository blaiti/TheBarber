import React from 'react';
import { 
    View, 
    ScrollView,
    StyleSheet,
    StatusBar,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Header from '../components/header';
import BestCard from '../components/bestCard';
import NearCard from '../components/nearCard';

import * as theme from '../constants/theme';

const bests = [
    {
        id: "1",
        name: 'Rouge',
        place: 'Hammamet - Nabeul',
        rating: '4',
        price: '15',
        tel: '(+216 22 222 222)',
        email: 'contact@barber.tn',
        image: require('../images/Rouge.jpg')
    },
    {
        id: "2",
        name: 'Wchamm',
        place: 'Corniche - Bizerte',
        rating: '3,2',
        price: '12',
        tel: '(+216 22 222 222)',
        email: 'contact@barber.tn',
        image: require('../images/Wchamm.jpg')
    },
    {
        id: "3",
        name: 'Kbir',
        place: 'Marsa - Tunis',
        rating: '4,5',
        price: '10',
        tel: '(+216 22 222 222)',
        email: 'contact@barber.tn',
        image: require('../images/Kbir.jpg')
    },
    {
        id: "4",
        name: 'Marwen',
        place: 'Aouina - Tunis',
        rating: '4,5',
        price: '12',
        tel: '(+216 22 222 222)',
        email: 'contact@barber.tn',
        image: require('../images/Marwen.jpg')
    }
]
const Home = ({navigation}) => {
    return (
      <View style= {styles.container}>
          <Header left="format-align-left" />
          <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content"/>
          
          <ScrollView style={styles.bodyContainer} showsVerticalScrollIndicator={false}>
              <View style={styles.textContainer}>
                  <Text style={styles.title}>The Best</Text>
                  <Text style={styles.text}>Show all</Text>
              </View>

              <View style={styles.bestContainer}>
                <FlatList 
                    data={bests}
                    horizontal={true}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{flex: 1}}
                                onPress={() => navigation.navigate('Barber', {name: item.name, place: item.place, tel: item.tel, email: item.email, image: item.image, rating: item.rating, price: item.price })}>
                                <BestCard item={item} />
                            </TouchableOpacity>
                        )
                    }} />
              </View>

              <View style={styles.textContainer}>
                  <Text style={styles.title}>Nearest Barbershop</Text>
                  <Text style={styles.text}>Show all</Text>
              </View>

              <View style={styles.nearContainer}>
                <FlatList 
                    data={bests}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <NearCard item={item} />
                        )
                    }} />
              </View>
          </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: theme.colors.white
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: theme.colors.lightBlack
    },
    textContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: theme.sizes.h4,
        color: theme.colors.white
    },
    text: {
        fontSize: theme.sizes.h5,
        color: theme.colors.white
    },
    bestContainer: {
        marginTop: 2
    },
    nearContainer: {
        padding: 10,
        alignItems: 'center'
    }
});

export default Home;