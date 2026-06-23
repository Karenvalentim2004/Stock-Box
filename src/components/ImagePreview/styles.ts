import { StyleSheet } from 'react-native'

import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        marginBottom: 16,
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.teal[700],
        backgroundColor: colors.black[800],
    },

    imagem: {
        width: '100%',
        height: '100%',
    },

    placeholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})