import {
    View,
    Text,
    TextInput,
    TextInputProps,
} from 'react-native';

import { styles } from './styles';

type Props = TextInputProps & {
    titulo: string;
}

export function TextField({
    titulo,
    ...rest
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                {titulo}
            </Text>

            <TextInput
                style={[
                    styles.input,
                    rest.multiline && styles.inputMultiline,
                ]}
                placeholderTextColor="#6B7280"
                {...rest}
            />
        </View>
    );
}