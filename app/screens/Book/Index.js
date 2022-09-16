/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, FlatList, Text, Linking } from 'react-native';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { URL_API_BOOKS } from '@env';
import styles from './Styles';
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
