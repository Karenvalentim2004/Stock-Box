import { database } from './database'

export type Produto = {
    id?: number;
    titulo: string;
    descricao: string;
    imagem: string;
    quantidade: number;
    valor: number;
}

export function createProduto(produto: Produto) {

    database.runSync(
        `
        INSERT INTO produtos (
            titulo,
            descricao,
            imagem,
            quantidade,
            valor
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            produto.titulo,
            produto.descricao,
            produto.imagem,
            produto.quantidade,
            produto.valor,
        ]
    )

}

export function getProdutos(): Produto[] {

    const result = database.getAllSync(
        `
        SELECT *
        FROM produtos
        ORDER BY id DESC
        `
    )

    return result as Produto[]

}

export function getProdutoById(id: number): Produto | null {

    const result = database.getFirstSync(
        `
        SELECT *
        FROM produtos
        WHERE id = ?
        `,
        [id]
    )

    return result as Produto | null

}

export function updateProduto(
    id: number,
    produto: Produto
) {

    database.runSync(
        `
        UPDATE produtos
        SET
            titulo = ?,
            descricao = ?,
            imagem = ?,
            quantidade = ?,
            valor = ?
        WHERE id = ?
        `,
        [
            produto.titulo,
            produto.descricao,
            produto.imagem,
            produto.quantidade,
            produto.valor,
            id,
        ]
    )

}

export function deleteProduto(id: number) {

    database.runSync(
        `
        DELETE FROM produtos
        WHERE id = ?
        `,
        [id]
    )

}

export function getTotalProdutos(): number {

    const result = database.getFirstSync<{
        total: number
    }>(
        `
        SELECT COUNT(*) AS total
        FROM produtos
        `
    )

    return result?.total ?? 0

}

export function getValorTotalEstoque(): number {

    const result = database.getFirstSync<{
        total: number
    }>(
        `
        SELECT SUM(valor * quantidade) AS total
        FROM produtos
        `
    )

    return result?.total ?? 0

}

export function searchProdutos(texto: string): Produto[] {

    const result = database.getAllSync(
        `
        SELECT *
        FROM produtos
        WHERE titulo LIKE ?
        ORDER BY id DESC
        `,
        [`%${texto}%`]
    )

    return result as Produto[]

}