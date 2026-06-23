import { useState } from 'react'

import {
    View,
    TextInput,
    TextInputProps,
    FlatList
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { colors } from '@/theme/colors'
import { styles } from './styles'
import { Card } from '@/components/Card'
import { ProdutoCard } from '@/components/ProductCard'
import { TextField } from '@/components/TextField'
import { CurrencyField } from '@/components/CurrencyField'


const produtos = [
    {
        id: '1',
        nome: 'Mouse Gamer',
        quantidade: 15,
        imagem: 'https://picsum.photos/200',
    },
    {
        id: '2',
        nome: 'Teclado Mecânico',
        quantidade: 8,
        imagem: 'https://picsum.photos/201',
    },
];

export function Home() {
    const [pesquisa, setPesquisa] = useState('');
    const [valor, setValor] = useState<number | null>(null);

    return (
        <View style={styles.container}>
            {/* <SearchInput
                value={pesquisa}
                onChangeText={setPesquisa}
            /> */}

            <View style={styles.cardsContainer}>
                <Card
                    titulo="Produtos"
                    valor="15"
                    icone="cube-outline"
                />

                <Card
                    titulo="Estoque"
                    valor="R$ 2.450"
                    icone="cash-outline"
                />
            </View>

            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <ProdutoCard
                        titulo={item.nome}
                        quantidade={item.quantidade}
                        imagem={item.imagem}
                    />
                )}
            />

            <TextField
                titulo="Nome do Produto"
                placeholder="Digite o nome"
            />

            <TextField
                titulo="URL da Imagem"
                placeholder="https://..."
            />

            <CurrencyField
                titulo="Valor Unitário"
                valor={valor}
                onChangeValor={setValor}
            />
        </View>
    );
}