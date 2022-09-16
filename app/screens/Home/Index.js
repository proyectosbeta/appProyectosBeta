/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import styles from './Styles';
import Menu from '../../components/Menu';

// eslint-disable-next-line no-unused-vars
const HomeScreen = (props) => {
    global.currentScreenIndex = 'Home';
    const { navigation } = props;

    return (
        <ImageBackground style={styles.background}>
            <View style={styles.view}>
                <Text style={styles.title}>Proyectos Beta</Text>
                <Menu navigation={{ navigation }} />
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;
