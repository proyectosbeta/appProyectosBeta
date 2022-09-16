import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const { colors } = useTheme();
const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
    },
    buttonContainer: {
        marginTop: 10,
    },
    text: {
        fontSize: 18,
        color: colors.text,
        paddingVertical: 4,
    },
    selectedText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'tomato',
        paddingVertical: 4,
    },
});

export default styles;
