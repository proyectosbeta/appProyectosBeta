import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import menu from './DataMenu';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 10,
        backgroundColor: '#fff',
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: '#fff',
    },
    listContainer: {
        alignItems: 'center',
    },
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor: '#e2e2e2',
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
        fontWeight: 'bold',
        marginTop: -16,
    },
});

const clickEventListener = (navigation, item) => {
    const screen = item.screen;

    navigation.navigate(screen);
};

const Menu = (props) => {
    const { navigation } = props.navigation;
    const { t } = useTranslation();

    return (
        <ScrollView horizontal={true} style={{ width: '100%' }}>
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={menu.data}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity
                                    style={[styles.card, { backgroundColor: item.color }]}
                                    onPress={() => {
                                        clickEventListener(navigation, item);
                                    }}
                                >
                                    <Image style={styles.cardImage} source={{ uri: item.image }} />
                                </TouchableOpacity>

                                <View style={styles.cardHeader}>
                                    <View
                                        style={{ alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        <Text style={[styles.title]}>
                                            {t(`navigate:${item.title}`)}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default Menu;
