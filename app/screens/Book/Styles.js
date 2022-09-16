import { StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const { colors } = useTheme();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        color: colors.text,
    },
    separatorLine: {
        height: 1,
        backgroundColor: 'plum',
        paddingTop: 2,
    },
});

export default styles;
