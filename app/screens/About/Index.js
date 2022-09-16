/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                En nuestra vida, desde que nacemos todo lo probamos, ensayamos y testeamos; así
                también erramos, caemos pero por sobre todo aprendemos. Es decir, todo lo que
                hacemos forma parte de una nueva experiencia, de un PROYECTO. El que siempre exista
                la posibilidad de mejorarlo es lo que lo convierte en BETA. En este blog queremos
                compartir contenidos de tipo informático con artículos de programación, software
                libre y propietario, redes, base de datos, noticias, experiencias, etc… y también de
                humor. Es un sitio de todos y para todos. Participá! Sos importante ...
            </Text>
            <Text style={styles.footer}>Proyectos Beta 2022</Text>
        </View>
    );
};

export default AboutScreen;
