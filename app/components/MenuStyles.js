import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 10,
        // backgroundColor: '#fff',
    },
    list: {
        paddingHorizontal: 5,
        // backgroundColor: '#fff',
    },
    listContainer: {
        alignItems: 'center',
    },
    card: {
        // shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginVertical: 20,
        marginHorizontal: 40,
        // backgroundColor: '#e2e2e2',
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardHeader: {
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        height: 50,
        width: 50,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        flex: 1,
        alignSelf: 'center',
        color: 'black',
        marginTop: -16,
    },
});

export default styles;