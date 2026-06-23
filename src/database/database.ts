import * as SQLite from 'expo-sqlite'

export const database = SQLite.openDatabaseSync('stockbox.db')

export function initializeDatabase() {

    database.execSync(`
        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            descricao TEXT,
            imagem TEXT,
            quantidade INTEGER NOT NULL,
            valor REAL NOT NULL
        );
    `)

}