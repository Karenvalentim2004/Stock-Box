import { StyleSheet } from 'react-native'

import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black[800],
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: colors.teal[700],
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    titulo: {
        color: colors.teal[300],
        fontSize: 12,
        marginLeft: 8,
    },
    valor: {
        color: colors.white,
        fontSize: 22,
        fontWeight: '700',
    },
})