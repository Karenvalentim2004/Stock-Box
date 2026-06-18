import {View,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '@/components/Header';
import { Button } from '@/components/Button';

import { styles } from './styles';

export function Home() {

    function handleAdicionar() {
        console.log('Adicionar produto')
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header
                titulo="Stock Box"
            />

            <View style={styles.content}>

                <Button
                    titulo="+ Adicionar Produto"
                    onPress={handleAdicionar}
                />

            </View>

        </SafeAreaView>
    );
}