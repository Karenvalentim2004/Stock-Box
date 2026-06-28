import { useState, useCallback } from 'react'

import {
    View,
    FlatList,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import {
    useNavigation,
    useFocusEffect,
} from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParamList } from '@/navigation/types'

import {
    Produto,
    getProdutos,
    getTotalProdutos,
    getValorTotalEstoque,
    searchProdutos,
} from '@/database/produtoRepository'

import { Header } from '@/components/Header'
import { SearchInput } from '@/components/SearchInput'
import { SummaryCard } from '@/components/SummaryCard'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/Button'

import { styles } from './styles'

type NavigationProps = NativeStackNavigationProp<
    RootStackParamList,
    'home'
>

export function Home() {

    const navigation = useNavigation<NavigationProps>()

    const [pesquisa, setPesquisa] = useState('')

    const [produtos, setProdutos] = useState<Produto[]>([])
    const [totalProdutos, setTotalProdutos] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)

    function carregarDados(texto = '') {

        const lista =
            texto.trim().length > 0
                ? searchProdutos(texto)
                : getProdutos()

        setProdutos(lista)
        setTotalProdutos(getTotalProdutos())
        setValorTotal(getValorTotalEstoque())

    }

    useFocusEffect(
        useCallback(() => {
            carregarDados()
        }, [])
    )

    function handleAdicionarProduto() {
        navigation.navigate('add-product')
    }

    return (
        <SafeAreaView
            style={styles.container}
            edges={['top']}
        >

            <Header
                titulo="Stock Box"
            />

            <SearchInput
                value={pesquisa}
                onChangeText={(texto) => {

                    setPesquisa(texto)
                    carregarDados(texto)

                }}
            />

            <View style={styles.cardsContainer}>

                <SummaryCard
                    titulo="Produtos"
                    valor={String(totalProdutos)}
                    icone="cube-outline"
                />

                <SummaryCard
                    titulo="Estoque"
                    valor={`R$ ${valorTotal.toFixed(2)}`}
                    icone="cash-outline"
                />

            </View>

            <FlatList
                data={produtos}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.lista}
                renderItem={({ item }) => (
                    <ProductCard
                        titulo={item.titulo}
                        quantidade={item.quantidade}
                        imagem={item.imagem}
                        onPress={() => {
                            if (item.id !== undefined) {
                                navigation.navigate('product-details', {
                                    id: item.id,
                                })
                            }
                        }}
                    />
                )}
            />

            <View style={styles.footer}>

                <Button
                    titulo="Adicionar Produto"
                    onPress={handleAdicionarProduto}
                />

            </View>

        </SafeAreaView>
    )
}