import React, {useState, useEffect} from 'react';
import { 
    View,  
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';

const RdvModal = (props) => {
    const [coupe, setCoupe] = useState(false)
    const [barbe, setBarbe] = useState(false)
    const [brushing, setBrushing] = useState(false)

    return (
        <View style={styles.container} behavior='padding'>
            <TouchableOpacity 
                style={{position: 'absolute', top: 46, right: 32}}
                onPress={props.closeModal}>
                <Icon name="close" size={24} color={theme.colors.lightBlack} />
            </TouchableOpacity>

            <View style={{alignSelf: 'stretch', marginHorizontal: 32}}>
                <Text style={styles.title}>{props.name}</Text>

                <View style={{marginTop: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <CheckBox
                            value={coupe}
                            onValueChange={setCoupe} />
                        <Text style={styles.label}>Coupe</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <CheckBox
                            value={barbe}
                            onValueChange={setBarbe}
                            style={{color: theme.colors.lightBlack}} />
                        <Text style={styles.label}>Barbe</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <CheckBox
                            value={brushing}
                            onValueChange={setBrushing} />
                        <Text style={styles.label}>Brushing</Text>
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.create}
                    onPress={props.closeModal} >
                        <Text style={styles.createText}>Rendez-Vous</Text>
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
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 16,
        color: theme.colors.black
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

export default RdvModal;