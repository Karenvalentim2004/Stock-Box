import {
    View,
    TextInput,
    TextInputProps,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { colors } from '@/theme/colors'
import { styles } from './styles'

type Props = TextInputProps

export function SearchInput({ ...rest }: Props) {
    return (
        <View style={styles.container}>

            <Ionicons
                name="search"
                size={20}
                color={colors.teal[400]}
            />

            <TextInput
                style={styles.input}
                placeholder="Pesquisar produto..."
                placeholderTextColor={colors.teal[400]}
                {...rest}
            />

        </View>
    )
}