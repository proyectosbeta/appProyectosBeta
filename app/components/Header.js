import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        marginBottom: 10,
    },
    sectionTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
    },
});

function Header() {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Libros recomendados</Text>
        </View>
    );
}

export default Header;
