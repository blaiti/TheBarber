import React, {useState} from 'react';
import { 
    View,  
    Modal,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';

import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';

const SignInModal = (props) => {
    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [tel, setTel] = useState('')

    const ToggleConfirmationVisible = () => {
        try {
            props.closeModal
        navigation.navigate('Home');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container} behavior='padding'>
            <TouchableOpacity 
                style={{position: 'absolute', top: 46, right: 32}}
                onPress={props.closeModal}>
                <Icon name="close" size={24} color={theme.colors.lightBlack} />
            </TouchableOpacity>

            <View style={{alignSelf: 'stretch', marginHorizontal: 32}}>
                <Text style={styles.title}>Bienvenue !</Text>

                <TextInput 
                    style={styles.input} 
                    placeholder="Nom.." 
                    onChangeText={text => setName(text)} />

                <TextInput 
                    style={styles.input} 
                    maxLength={8}
                    keyboardType='phone-pad'
                    placeholder="Téléphone.." 
                    onChangeText={text => setTel(text)} />

                <TouchableOpacity 
                    style={styles.create}
                    onPress={() => ToggleConfirmationVisible()}>
                        <Text style={styles.createText}>Connexion</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        alignSelf: 'center',
        marginBottom: 16,
        color: theme.colors.black
    },
    input: {
        height: 50,
        fontSize: 18, 
        marginTop: 8,
        borderRadius: 6,
        paddingHorizontal: 16,
        borderColor: theme.colors.blue,
        borderWidth: StyleSheet.hairlineWidth
    },
    create:{
        height: 50,
        marginTop: 15,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightBlack
    },
    createText: {
        fontWeight: '900',
        fontSize: 18,
        color: theme.colors.white
    },
});

export default SignInModal;