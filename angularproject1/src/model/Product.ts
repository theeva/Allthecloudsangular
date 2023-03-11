export class Product {
  id: number;
  name: string;
  description: string;
  markupPrice: number;
  maximumQuantity: number;

  constructor(id: number, name: string, description: string, markupPrice: number, maximumQuantity: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.markupPrice = markupPrice;
    this.maximumQuantity = maximumQuantity;
  }
}
