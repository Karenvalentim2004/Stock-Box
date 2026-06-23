import { useEffect, useState } from 'react'

import {
    View,
    ScrollView,
    Alert,
} from 'react-native'

import {
    useNavigation,
    useRoute,
} from '@react-navigation/native'

import { Header } from '@/components/Header'
import { TextField } from '@/components/TextField'
import { CurrencyField } from '@/components/CurrencyField'
import { ImagePreview } from '@/components/ImagePreview'
import { Button } from '@/components/Button'

import {
    getProdutoById,
    updateProduto,
} from '@/database/produtoRepository'

import { styles } from './styles'

export function EditProduct() {

    const navigation = useNavigation()

    const route = useRoute()

    const { id } = route.params as {
        id: number
    }

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [valor, setValor] = useState<number | null>(null)

    useEffect(() => {

        const produto = getProdutoById(id)

        if (!produto) {
            return
        }

        setNome(produto.titulo)
        setDescricao(produto.descricao)
        setImagem(produto.imagem)
        setQuantidade(String(produto.quantidade))
        setValor(produto.valor)

    }, [id])

    function handleSalvar() {

        if (!valor) {
            return
        }

        updateProduto(id, {
            titulo: nome,
            descricao,
            imagem,
            quantidade: Number(quantidade),
            valor,
        })

        Alert.alert(
            'Sucesso',
            'Produto atualizado.'
        )

        navigation.goBack()
    }

    return (
        <View style={styles.container}>

            <Header
                titulo="Editar Produto"
                mostrarVoltar
                onVoltar={() => navigation.goBack()}
            />

            <ScrollView
                contentContainerStyle={styles.content}
            >

                <TextField
                    titulo="Nome do Produto"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextField
                    titulo="Descrição"
                    value={descricao}
                    onChangeText={setDescricao}
                    multiline
                />

                <TextField
                    titulo="URL da Imagem"
                    value={imagem}
                    onChangeText={setImagem}
                />

                <ImagePreview
                    imagem={imagem}
                />

                <TextField
                    titulo="Quantidade"
                    value={quantidade}
                    onChangeText={setQuantidade}
                    keyboardType="numeric"
                />

                <CurrencyField
                    titulo="Valor Unitário"
                    valor={valor}
                    onChangeValor={setValor}
                />

                <Button
                    titulo="Salvar Alterações"
                    onPress={handleSalvar}
                />

            </ScrollView>

        </View>
    )
}