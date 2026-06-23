import {
    View,
    Image,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { colors } from '@/theme/colors'
import { styles } from './styles'

type Props = {
    imagem?: string;
}

export function ImagePreview({
    imagem,
}: Props) {
    return (
        <View style={styles.container}>

            {imagem ? (
                <Image
                    source={{ uri: imagem }}
                    style={styles.imagem}
                />
            ) : (
                <View style={styles.placeholder}>

                    <Ionicons
                        name="image-outline"
                        size={48}
                        color={colors.teal[400]}
                    />

                </View>
            )}

        </View>
    )
}