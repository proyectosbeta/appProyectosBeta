/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';

import styles from './Styles';
import Selector from '../../components/LanguageSelector';

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Selector />
        </View>
    );
};

export default SettingScreen;
