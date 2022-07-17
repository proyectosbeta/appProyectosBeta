/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Linking } from 'react-native';
import Header from '../../components/Header';
import Separator from '../../components/Separator';
import axios from 'axios';

const BookInfo = ({ author, title, link }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{`T\u00edtulo: ${title}`}</Text>
        <Text style={styles.title}>{`Autor: ${author}`}</Text>
        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(link)}>
            Link
        </Text>
    </View>
);

const renderItem = ({ item }) => <BookInfo author={item.author} title={item.title} link={item.link} />;
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
function BookScreen(props) {
    const URL = 'http://51.15.192.116:3030/api/v1/books';
    const [data, setData] = useState([]);
    const loadData = useCallback(() => {
        axios
            .get(URL)
            .then(response => {
                const books = response.data;

                setData(books);
            })
            .catch(error => {
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
}

export default BookScreen;
