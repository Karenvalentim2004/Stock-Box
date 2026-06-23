import { useState } from 'react'

import { createProduto } from '@/database/produtoRepository'
import { useNavigation } from '@react-navigation/native'

import {
    View,
    ScrollView,
} from 'react-native'

import { Header } from '@/components/Header'
import { TextField } from '@/components/TextField'
import { CurrencyField } from '@/components/CurrencyField'
import { Button } from '@/components/Button'
import { ImagePreview } from '@/components/ImagePreview'

import { styles } from './styles'

export function AddProduct() {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [valor, setValor] = useState<number | null>(null)
    const navigation = useNavigation()

    function handleSalvar() {

        if (!nome.trim()) {
            Alert.alert(
                'Atenção',
                'Informe o nome do produto.'
            )
            return
        }

        if (!quantidade.trim()) {
            Alert.alert(
                'Atenção',
                'Informe a quantidade.'
            )
            return
        }

        if (!valor) {
            Alert.alert(
                'Atenção',
                'Informe o valor do produto.'
            )
            return
        }

        try {

            createProduto({
                titulo: nome,
                descricao,
                imagem,
                quantidade: Number(quantidade),
                valor,
            })

            navigation.goBack()

            Alert.alert(
                'Sucesso',
                'Produto cadastrado.'
            )

            navigation.goBack()

            setNome('')
            setDescricao('')
            setImagem('')
            setQuantidade('')
            setValor(null)

        } catch (error) {

            Alert.alert(
                'Erro',
                'Não foi possível salvar o produto.'
            )

            console.log(error)

        }

    }

    return (
        <View style={styles.container}>

            <Header
                titulo="Adicionar Produto"
                mostrarVoltar
                onVoltar={() => navigation.goBack()}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                <TextField
                    titulo="Nome do Produto"
                    placeholder="Digite o nome"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextField
                    titulo="Descrição"
                    placeholder="Digite a descrição"
                    value={descricao}
                    onChangeText={setDescricao}
                    multiline
                />

                <TextField
                    titulo="URL da Imagem"
                    placeholder="https://..."
                    value={imagem}
                    onChangeText={setImagem}
                />

                <ImagePreview
                    imagem={imagem}
                />

                <TextField
                    titulo="Quantidade"
                    placeholder="0"
                    keyboardType="numeric"
                    value={quantidade}
                    onChangeText={setQuantidade}
                />

                <CurrencyField
                    titulo="Valor Unitário"
                    valor={valor}
                    onChangeValor={setValor}
                />

                <Button
                    titulo="Salvar Produto"
                    onPress={handleSalvar}
                />

            </ScrollView>

        </View>
    )
}