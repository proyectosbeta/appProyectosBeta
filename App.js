import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import RootNavigator from './app/navigation/RootNavigator';

const App: () => Node = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return <RootNavigator />;
};

export default App;
