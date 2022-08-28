/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Linking } from 'react-native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { URL_API_BOOKS } from '@env';
import Header from '../../components/Header';
import Separator from '../../components/Separator';

function BookInfo({ author, title, year, link }) {
    const { t } = useTranslation();

    return (
        <View style={styles.item}>
            <Text style={styles.title}>{`${t('common:book:title')}: ${title}`}</Text>
            <Text style={styles.title}>{`${t('common:book:author')}: ${author}`}</Text>
            <Text style={styles.title}>{`${t('common:book:year')}: ${year}`}</Text>
            <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(link)}>
                {t('common:book:link')}
            </Text>
        </View>
    );
}

const renderItem = ({ item }) => (
    <BookInfo author={item.author} title={item.title} year={item.year} link={item.link} />
);
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
        color: 'black',
    },
    separatorLine: {
        height: 1,
        backgroundColor: 'plum',
        paddingTop: 2,
    },
});

// eslint-disable-next-line no-unused-vars
const BookScreen = (props) => {
    const URL = `${URL_API_BOOKS}/api/v1/books`;
    const [data, setData] = useState([]);
    const loadData = useCallback(() => {
        axios
            .get(URL)
            .then((response) => {
                const dataResponse = response.data;
                const { success } = dataResponse;
                const { data } = dataResponse;

                success ? setData(data) : setData(null);
            })
            .catch((error) => {
                console.error('The error: ', error);
            });
    }, []);

    useEffect(() => loadData(), [loadData]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={Header}
            />
        </SafeAreaView>
    );
};

export default BookScreen;
