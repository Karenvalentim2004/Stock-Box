import { View, Text, } from 'react-native';

import CurrencyInput from 'react-native-currency-input';

import { styles } from './styles';

type Props = {
    titulo: string;
    valor: number | null;
    onChangeValor: (value: number | null) => void;
}

export function CurrencyField({
    titulo,
    valor,
    onChangeValor,
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                {titulo}
            </Text>

            <CurrencyInput
                value={valor}
                onChangeValue={onChangeValor}
                prefix="R$ "
                delimiter="."
                separator=","
                precision={2}
                style={styles.input}
                placeholder="R$ 0,00"
                placeholderTextColor="#6B7280"
            />
        </View>
    )
}