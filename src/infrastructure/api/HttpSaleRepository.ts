import { SaleRepository } from '../../application/ports/SaleRepository';

export class HttpSaleRepository implements SaleRepository {
    async createSale(items: { productId: string; quantity: number }[]): Promise<string> {
        const response = await fetch('/api/sales', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items })
        });
        if (!response.ok) throw new Error("Failed to place sale");
        const data = await response.json();
        return data.id;
    }
}
