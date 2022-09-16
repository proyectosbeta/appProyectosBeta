import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './MenuStyles';
import menu from './DataMenu';

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
