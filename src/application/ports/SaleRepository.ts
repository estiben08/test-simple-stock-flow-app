export interface SaleRepository {
    createSale(items: { productId: string; quantity: number }[]): Promise<string>;
}
