import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import { Icon } from 'react-native-elements';

import HomeScreen from './app/screens/Home/Index';
import SettingsScreen from './app/screens/Settings/Index';
import BookScreen from './app/screens/Book/Index';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
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
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Book"
                    component={BookScreen}
                    options={{
                        tabBarLabel: 'Book',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="book" color={color} size={size} />
                        ),
                    }}
                />
                {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
