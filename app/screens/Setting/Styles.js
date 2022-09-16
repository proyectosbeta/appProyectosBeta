import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const { colors } = useTheme();
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default styles;
