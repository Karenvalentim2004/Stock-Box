import { useEffect, useState } from 'react'

import {
    Text,
    Image,
    ScrollView,
    Alert,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import {
    useNavigation,
    useRoute,
    RouteProp,
} from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Header } from '@/components/Header'
import { Button } from '@/components/Button'

import {
    Produto,
    getProdutoById,
    deleteProduto,
} from '@/database/produtoRepository'

import { RootStackParamList } from '@/navigation/types'

import { styles } from './styles'

type NavigationProps = NativeStackNavigationProp<
    RootStackParamList,
    'product-details'
>

type RouteProps = RouteProp<
    RootStackParamList,
    'product-details'
>

export function ProductDetails() {

    const navigation = useNavigation<NavigationProps>()

    const route = useRoute<RouteProps>()

    const { id } = route.params

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
        <SafeAreaView style={styles.container}>

            <Header
                titulo="Detalhes"
                mostrarVoltar
                mostrarEditar
                onVoltar={() => navigation.goBack()}
                onEditar={() =>
                    navigation.navigate('edit-product', {
                        id,
                    })
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

        </SafeAreaView>
    )
}