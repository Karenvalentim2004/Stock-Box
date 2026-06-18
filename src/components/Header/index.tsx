import {
    View,
    Text,
    TouchableOpacity,
    ViewProps,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { colors } from '@/theme/colors';

type Props = ViewProps & {
    titulo: string;
    mostrarVoltar?: boolean;
    mostrarEditar?: boolean;
    onVoltar?: () => void;
    onEditar?: () => void;
}

export function Header({
    titulo,
    mostrarVoltar = false,
    mostrarEditar = false,
    onVoltar,
    onEditar,
    ...rest
}: Props) {
    return (
        <View
            style={styles.container}
            {...rest}
        >

            <View style={styles.ladoEsquerdo}>

                {mostrarVoltar && (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={onVoltar}
                    >
                        <Ionicons
                            name="arrow-back"
                            size={24}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                )}

            </View>

            <Text style={styles.titulo}>
                {titulo}
            </Text>

            <View style={styles.ladoDireito}>

                {mostrarEditar && (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={onEditar}
                    >
                        <Ionicons
                            name="pencil"
                            size={22}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                )}

            </View>

        </View>
    );
}