// ./navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';

import {
    MainStackNavigator,
    TipStackNavigator,
    BookStackNavigator,
    SettingStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const { t } = useTranslation();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: t('navigate:home:title'),
                    tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
                }}
            />
            {/* <Tab.Screen
                name="Tip"
                component={TipStackNavigator}
                options={{
                    tabBarLabel: t('navigate:tip:title'),
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="topic" color={color} size={size} />
                    ),
                }}
            /> */}
            <Tab.Screen
                name="Book"
                component={BookStackNavigator}
                options={{
                    tabBarLabel: t('navigate:book:title'),
                    tabBarIcon: ({ color, size }) => <Icon name="book" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingStackNavigator}
                options={{
                    tabBarLabel: t('navigate:setting:title'),
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="topic" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
