import { StyleSheet } from 'react-native';

import { colors } from '@/theme/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black[800],
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: colors.teal[700],
    },

    imagem: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        marginBottom: 12,
    },

    imagemPlaceholder: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: colors.black[700],
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },

    quantidade: {
        color: colors.teal[300],
        fontSize: 12,
        marginTop: 4,
    },
});