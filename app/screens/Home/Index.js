/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    background: {
        with: '100%',
        height: '100%',
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
});

// eslint-disable-next-line no-unused-vars
function HomeScreen(props) {
    return (
        <ImageBackground source={require('./background.png')} style={styles.background}>
            <View style={styles.view}>
                <Text style={styles.text}>Proyectos Beta</Text>
            </View>
        </ImageBackground>
    );
}

export default HomeScreen;
