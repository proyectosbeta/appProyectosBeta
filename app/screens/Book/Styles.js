import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        color: 'black',
    },
    separatorLine: {
        height: 1,
        backgroundColor: 'plum',
        paddingTop: 2,
    },
});

export default styles;
