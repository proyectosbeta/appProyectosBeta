import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

import './app/constants/IMLocalize';
import BottomTabNavigator from './app/navigation/TabNavigator';

const App: () => Node = () => {
    const scheme = useColorScheme();

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <BottomTabNavigator />
        </NavigationContainer>
    );
};

export default App;
