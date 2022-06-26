/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Linking } from 'react-native';
import Header from '../../components/Header';
import Separator from '../../components/Separator';
import BOOKS from '../../assets/Data/books';

const BookInfo = ({ name, book, link }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{'Autor : ' + name}</Text>
        <Text style={styles.title}>{'T\u00edtulo : ' + book}</Text>
        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(link)}>
            Link
        </Text>
    </View>
);

const renderItem = ({ item }) => <BookInfo name={item.name} book={item.book} link={item.link} />;
const styles     = StyleSheet.create({
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
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={BOOKS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={Header}
            />
        </SafeAreaView>
    );
}

export default BookScreen;
