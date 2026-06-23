import { StyleSheet } from 'react-native'

import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black[900],
    },

    content: {
        padding: 20,
    },

    imagem: {
        width: '100%',
        height: 220,
        borderRadius: 12,
        marginBottom: 20,
    },

    nome: {
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    label: {
        color: colors.teal[300],
        fontSize: 14,
        marginTop: 12,
    },

    valor: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '600',
    },

    descricao: {
        color: colors.white,
        fontSize: 16,
        marginTop: 8,
    },
})