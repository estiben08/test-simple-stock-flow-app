import { SaleRepository } from '../ports/SaleRepository';

export class PlaceSaleService {
    constructor(private saleRepository: SaleRepository) {}

    async execute(items: { productId: string; quantity: number }[]): Promise<string> {
        if (items.length === 0) throw new Error("Sale must have items");
        return await this.saleRepository.createSale(items);
    }
}
