import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const { colors } = useTheme();
const styles = StyleSheet.create({
    background: {
        with: '100%',
        height: '100%',
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 45,
    },
});

export default styles;
