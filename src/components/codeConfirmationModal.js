import React, {useState} from 'react';
import { 
    View,  
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as theme from '../constants/theme';

const CodeConfirmationModal = (props) => {
    const navigation = useNavigation();

    const [confirm, setConfirm] = useState(null)
    const [code, setCode] = useState('')

    async function confirmCode() {
        try {
            await confirm.confirm(code);
            navigation.navigate('Home');
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    return (
        <View style={styles.container} behavior='padding'>

            <View style={{alignSelf: 'stretch', marginHorizontal: 32}}>
                <Text style={styles.title}>Bienvenue !</Text>

                <TextInput 
                    placeholder="Code.." 
                    maxLength={6}
                    keyboardType='phone-pad'
                    style={styles.input} 
                    onChangeText={text => setCode(text)} />


                <TouchableOpacity 
                    style={styles.create}
                    onPress={() => confirmCode()} >
                        <Text style={styles.createText}>Vérifier</Text>
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

export default CodeConfirmationModal;