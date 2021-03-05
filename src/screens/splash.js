import React from 'react';
import { 
    View,
    Text, 
    TouchableOpacity, 
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import * as theme from '../constants/theme';

const SplashScreen = ({navigation}) => {

    return (
        <View style={{flex: 1}}>
            <ImageBackground 
                style={styles.container}
                source={require('../images/DocBackground.jpg')}
                resizeMode="cover">
                <StatusBar backgroundColor={theme.colors.darkBlack} barStyle="light-content"/>
                <View  style={styles.header} >
                    <Image
                    style={{ width: 200, height: 150}}
                    source={require('../images/logo.png')}/>
                </View>
                <Animatable.View 
                    style={[styles.footer, {
                        backgroundColor: theme.colors.white
                    }]}
                    animation="fadeInUpBig" >
                        
                    <Text style={styles.title}>Find the best barber in the area.</Text>
                    <TouchableOpacity 
                        style={styles.signIn}
                        onPress={() => navigation.navigate('Home')} >
                            <Text style={styles.textSign}>Let's Go</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ImageBackground>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: '#05375a',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.colors.darkBlack
    },
    signIn: {
        width: 160,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: theme.colors.darkBlack
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default SplashScreen;