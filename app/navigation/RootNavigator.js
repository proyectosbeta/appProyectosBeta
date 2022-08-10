import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

import '../constants/IMLocalize';
import HomeScreen from '../screens/Home/Index';
import SettingScreen from '../screens/Setting/Index';
import BookScreen from '../screens/Book/Index';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
    const { t } = useTranslation();

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
                            <Icon name="settings" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
