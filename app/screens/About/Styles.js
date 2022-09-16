import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const { colors } = useTheme();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        paddingTop: 25,
        paddingLeft: 15,
        fontSize: 15,
        color: colors.text,
    },
    footer: {
        fontSize: 12,
        flex: 1,
        alignSelf: 'center',
        color: colors.text,
        fontWeight: 'bold',
        marginTop: 16,
    },
});

export default styles;
