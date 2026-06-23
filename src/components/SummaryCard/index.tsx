import {
    View,
    Text,
    ViewProps,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { colors } from '@/theme/colors'
import { styles } from './styles'

type Props = ViewProps & {
    titulo: string;
    valor: string;
    icone: keyof typeof Ionicons.glyphMap;
}

export function SummaryCard({
    titulo,
    valor,
    icone,
    ...rest
}: Props) {
    return (
        <View
            style={styles.container}
            {...rest}
        >
            <View style={styles.header}>

                <Ionicons
                    name={icone}
                    size={18}
                    color={colors.teal[400]}
                />

                <Text style={styles.titulo}>
                    {titulo}
                </Text>

            </View>

            <Text style={styles.valor}>
                {valor}
            </Text>

        </View>
    )
}