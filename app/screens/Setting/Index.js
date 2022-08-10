/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View } from 'react-native';

import Selector from '../../components/LanguageSelector';

const SettingScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Selector />
        </View>
    );
};

export default SettingScreen;