import React, {useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    StatusBar,
    ImageBackground,
    Image,
    ScrollView,
    FlatList,
    Modal
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RdvModal from '../components/rdvModal';

const images = [
    {
        id: "1",
        image: require('../images/1.jpg')
    },
    {
        id: "2",
        image: require('../images/2.jpg')
    },
]

const Barber = ({navigation, route}) => {
    const {name, place, tel, email, image, rating, price} = route.params;
    const [rdvVisible, setRdvVisible] = useState(false)

    const ToggleRdvVisible = () => {
        setRdvVisible(!rdvVisible)
    }
    return (
        <View style={{flex: 1}}>
            <Modal 
            animationType="slide" 
            visible={rdvVisible}
            onRequestClose={() => ToggleRdvVisible()}>
                <RdvModal closeModal={() => ToggleRdvVisible()} name={name} />
        </Modal>
        <ImageBackground 
            style={styles.container}
            source={image}
            resizeMode="cover" >
            <StatusBar barStyle="light-content"/>
            
            <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                <Icon name="cancel" size={35} color={theme.colors.white} />
            </TouchableOpacity>

            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: theme.colors.white
                }]}
                animation="fadeInUpBig" >
                    
                <View style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.title}>{price} DT</Text>
                    </View>
                    <View style={styles.imagesContainer}>
                        <FlatList
                            data={images}
                            numColumns={2}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <Image
                                        source={item.image}
                                        style={{width: 150, height: 150, margin: 5}} />
                                )
                            }} />
                    </View>
                    
                    <View style={styles.info}>
                        <View style={styles.infoRow}>
                            <Icon name="place" size={25} color={theme.colors.darkBlack} />
                            <Text style={styles.infoText}>{place}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Icon name="smartphone" size={25} color={theme.colors.darkBlack} />
                            <Text style={styles.infoText}>{tel}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Icon name="email" size={25} color={theme.colors.darkBlack} />
                            <Text style={styles.infoText}>{email}</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => ToggleRdvVisible()} >
                        <Text style={styles.buttonText}>Rendez-vous</Text>
                </TouchableOpacity>
            </Animatable.View>
        </ImageBackground>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 2, 
    },
    header: {
        flex: 1.1,
        padding: 10,
        alignItems: 'flex-end',
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 15,
    },
    title: {
        color: theme.colors.darkBlack,
        fontSize: 30,
        fontWeight: 'bold',
        color: theme.colors.darkBlack
    },
    text: {
        color: '#05375a',
        fontSize: 18,
        fontWeight: '900',
        color: theme.colors.darkBlack
    },
    buttonContainer: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.darkBlack,
    },
    buttonText: {
        fontSize: theme.sizes.h2,
        color: theme.colors.white
    },

    infoRow: {
        marginTop: 15,
        flexDirection: 'row'
    },
    infoText: {
        marginLeft: 10,
        fontSize: theme.sizes.h4,
        color: theme.colors.darkBlack,
    },
    imagesContainer: {
        paddingTop: 20,
        alignItems: 'center'
    }
});

export default Barber;