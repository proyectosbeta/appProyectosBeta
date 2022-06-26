/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    background: {
        with: '100%',
        height: '100%',
        backgroundColor: '#465f7e',
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
    },
    text: {
        color: 'white',
        marginTop: 10,
        fontSize: 14,
    },
});

// eslint-disable-next-line no-unused-vars
function HomeScreen(props) {
    return (
        <ImageBackground style={styles.background}>
            <View style={styles.view}>
                <Text style={styles.title}>Proyectos Beta</Text>
                <Text style={styles.text}>Se vienen tips...</Text>
            </View>
        </ImageBackground>
    );
}

export default HomeScreen;
