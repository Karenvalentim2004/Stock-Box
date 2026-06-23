import { StyleSheet } from 'react-native'

import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 56,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingHorizontal: 16,
    },

    ladoEsquerdo: {
        width: 40,
        alignItems: 'flex-start',
    },

    ladoDireito: {
        width: 40,
        alignItems: 'flex-end',
    },

    titulo: {
        flex: 1,
        textAlign: 'center',
        color: colors.white,
        fontSize: 18,
        fontWeight: '700',
    },

});