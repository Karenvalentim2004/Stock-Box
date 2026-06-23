import { StyleSheet } from 'react-native'

import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black[900],
        paddingHorizontal: 20,
        paddingTop: 16,
    },

    cardsContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 20,
        marginBottom: 20,
    },

    lista: {
        paddingBottom: 20,
    },

    row: {
        gap: 12,
        marginBottom: 12,
    },
})