import { useEffect } from 'react'

import { StatusBar } from 'expo-status-bar'

import { initializeDatabase } from '@/database/database'
import { AppRoutes } from '@/navigation/app.routes'

export default function App() {

    useEffect(() => {
        initializeDatabase()
    }, [])

    return (
        <>
            <StatusBar style="light" />
            <AppRoutes />
        </>
    )
}