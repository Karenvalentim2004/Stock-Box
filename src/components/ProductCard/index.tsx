import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/theme/colors';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    titulo: string;
    quantidade: number;
    imagem?: string;
}

export function ProductCard({
    titulo,
    quantidade,
    imagem,
    ...rest
}: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            {...rest}
        >
            {imagem ? (
                <Image
                    source={{ uri: imagem }}
                    style={styles.imagem}
                />
            ) : (
                <View style={styles.imagemPlaceholder}>
                    <Ionicons
                        name="image-outline"
                        size={32}
                        color={colors.teal[400]}
                    />
                </View>
            )}

            <Text
                style={styles.titulo}
                numberOfLines={1}
            >
                {titulo}
            </Text>

            <Text style={styles.quantidade}>
                {quantidade} unidades
            </Text>
        </TouchableOpacity>
    );
}