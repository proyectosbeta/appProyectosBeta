/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';

import Menu from '../../components/Menu';

const styles = StyleSheet.create({
    background: {
        with: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 45,
    },
    text: {
        color: 'white',
        marginTop: 10,
        fontSize: 14,
    },
});

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
