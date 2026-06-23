import { useEffect, useState } from 'react'

import {
    View,
    Text,
    Image,
    ScrollView,
    Alert,
} from 'react-native'

import {
    useNavigation,
    useRoute,
} from '@react-navigation/native'

import { Header } from '@/components/Header'
import { Button } from '@/components/Button'

import {
    Produto,
    getProdutoById,
    deleteProduto,
} from '@/database/produtoRepository'

import { styles } from './styles'

export function ProductDetails() {

    const navigation = useNavigation()

    const route = useRoute()

    const { id } = route.params as {
        id: number
    }

    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {

        const result = getProdutoById(id)

        setProduto(result)

    }, [id])

    function handleExcluir() {

        Alert.alert(
            'Excluir Produto',
            'Deseja realmente excluir este produto?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: () => {

                        deleteProduto(id)

                        navigation.goBack()

                    },
                },
            ]
        )

    }

    if (!produto) {
        return null
    }

    return (
        <View style={styles.container}>

            <Header
                titulo="Detalhes"
                mostrarVoltar
                mostrarEditar
                onVoltar={() => navigation.goBack()}
                onEditar={() =>
                    navigation.navigate(
                        'edit-product' as never,
                        { id } as never
                    )
                }
            />

            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >

                {produto.imagem ? (
                    <Image
                        source={{ uri: produto.imagem }}
                        style={styles.imagem}
                    />
                ) : null}

                <Text style={styles.nome}>
                    {produto.titulo}
                </Text>

                <Text style={styles.label}>
                    Quantidade
                </Text>

                <Text style={styles.valor}>
                    {produto.quantidade}
                </Text>

                <Text style={styles.label}>
                    Valor Unitário
                </Text>

                <Text style={styles.valor}>
                    R$ {produto.valor.toFixed(2)}
                </Text>

                <Text style={styles.label}>
                    Valor Estoque
                </Text>

                <Text style={styles.valor}>
                    R$ {(produto.valor * produto.quantidade).toFixed(2)}
                </Text>

                <Text style={styles.label}>
                    Descrição
                </Text>

                <Text style={styles.descricao}>
                    {produto.descricao}
                </Text>

                <Button
                    titulo="Excluir Produto"
                    onPress={handleExcluir}
                />

            </ScrollView>

        </View>
    )
}