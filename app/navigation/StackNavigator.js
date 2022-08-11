import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Index';
import AboutScreen from '../screens/About/Index';

import TipScreen from '../screens/Tip/Index';
import BookScreen from '../screens/Book/Index';
import SettingScreen from '../screens/Setting/Index';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home1" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
};

const screenOptionStyle = {
    headerShown: false,
};

const TipStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Tip1" component={TipScreen} />
        </Stack.Navigator>
    );
};

const BookStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Book1" component={BookScreen} />
        </Stack.Navigator>
    );
};

const SettingStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Setting1" component={SettingScreen} />
        </Stack.Navigator>
    );
};

export default { MainStackNavigator, TipStackNavigator, BookStackNavigator, SettingStackNavigator };
