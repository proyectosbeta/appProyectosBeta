import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './HeaderStyles';

function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Libros recomendados</Text>
        </View>
    );
}

export default Header;
