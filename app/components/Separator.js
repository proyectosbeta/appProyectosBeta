import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    separatorLine: {
        height: 1,
        backgroundColor: 'plum',
        paddingTop: 2,
    },
});

function Separator() {
    return <View style={styles.separatorLine} />;
}

export default Separator;
