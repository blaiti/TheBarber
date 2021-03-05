import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Icon name={props.left} color={theme.colors.white} size={26} />
        </View>

        <View style={styles.center}>
          <Image
                style={{ width: 100, height: 40}}
                source={require('../images/logo.png')}/> 
        </View>

        <View style={styles.right}>
            <Image
                style={{ width: 40, height: 40, borderRadius: 20}}
                source={require('../images/Skander.jpg')}/> 
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: theme.colors.darkBlack,
  },
  left: {
    flex: 1,
    padding: 5,
    justifyContent: 'center'
  },
  center: {
    flex: 4,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Header;