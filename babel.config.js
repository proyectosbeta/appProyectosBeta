const pak = require('./package.json');

module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                extensions: ['.tsx', '.ts', '.js', '.json'],
            },
        ],
        [
            'module:react-native-dotenv',
            {
                envName: 'APP_ENV',
                moduleName: '@env',
                path: '.env',
            },
        ],
        'react-native-reanimated/plugin', // PUT IT HERE
    ],
};
