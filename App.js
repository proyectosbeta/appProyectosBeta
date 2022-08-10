import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import { Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

import './app/constants/IMLocalize';
import HomeScreen from './app/screens/Home/Index';
import SettingScreen from './app/screens/Setting/Index';
import BookScreen from './app/screens/Book/Index';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
    const { t } = useTranslation();

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: t('navigate:home:title'),
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Book"
                    component={BookScreen}
                    options={{
                        tabBarLabel: t('navigate:book:title'),
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="book" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={{
                        tabBarLabel: t('navigate:setting:title'),
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="setting" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
