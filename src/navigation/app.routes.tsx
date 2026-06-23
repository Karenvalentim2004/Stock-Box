import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/app'
import { AddProduct } from '@/screens/AddProduct'
import { ProductDetails } from '@/screens/ProductDetails'
import { EditProduct } from '@/screens/EditProduct'

const Stack = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="home"
                    component={Home}
                />

                <Stack.Screen
                    name="add-product"
                    component={AddProduct}
                />

                <Stack.Screen
                    name="product-details"
                    component={ProductDetails}
                />

                <Stack.Screen
                    name="edit-product"
                    component={EditProduct}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}