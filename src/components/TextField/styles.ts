import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 16,
    },

    titulo: {
        color: colors.white,
        fontSize: 14,
        marginBottom: 8,
        fontWeight: '600',
    },

    input: {
        width: '100%',
        height: 48,
        backgroundColor: colors.black[800],
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.teal[700],
        paddingHorizontal: 16,
        color: colors.white,
        fontSize: 14,
    },

    inputMultiline: {
        height: 120,
        textAlignVertical: 'top',
        paddingTop: 16,
    },
});