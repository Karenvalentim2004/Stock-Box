import { StyleSheet } from 'react-native'

import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.black[800],
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.teal[500],
        paddingHorizontal: 16,
    },

    input: {
        flex: 1,
        marginLeft: 10,
        color: colors.white,
        fontSize: 14,
    },
})