import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useTranslation } from 'react-i18next';

import styles from './LanguageSelectorStyles';

const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
];

const Selector = () => {
    const { t, i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;

    const setLanguage = (code) => {
        return i18n.changeLanguage(code);
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>{t('common:languageSelector')}</Text>
                <Ionicons color="#444" size={28} name="language" />
            </View>
            {LANGUAGES.map((language) => {
                const selectedLanguage = language.code === selectedLanguageCode;

                return (
                    <Pressable
                        key={language.code}
                        style={styles.buttonContainer}
                        disabled={selectedLanguage}
                        onPress={() => setLanguage(language.code)}
                    >
                        <Text style={[selectedLanguage ? styles.selectedText : styles.text]}>
                            {language.label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
};

export default Selector;
