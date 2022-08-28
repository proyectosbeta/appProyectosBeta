import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

console.reportErrorsAsExceptions = false;
import './app/constants/IMLocalize';
import BottomTabNavigator from './app/navigation/TabNavigator';

const App: () => Node = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
};

export default App;
