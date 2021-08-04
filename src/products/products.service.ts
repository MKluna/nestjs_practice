import { Injectable } from '@nestjs/common';
import { Products } from './interfaces/Products';

@Injectable()
export class ProductsService {
  products: Products[] = [
    {
      id: '1',
      name: 'Sprite',
      description: '500 ml',
      available: true,
    },
    {
      id: '3',
      name: 'Cerveza Patagonia',
      description: 'hoppylager',
      available: true,
    },
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: string) {
    const findProduct = this.products.find((product) => product.id === id);
    return findProduct;
  }

  postProduct(name: string, description: string, available: boolean) {
    const newProduct = { id: '2', name, description, available };
    this.products.push(newProduct);
    return this.products;
  }

  deleteProduct(id: string) {
    const newArray = this.products.filter((products) => products.id !== id);
    return newArray;
  }

  putProduct(
    id: string,
    name: string,
    description: string,
    available: boolean,
  ) {
    const productFound = this.getProduct(id);
    productFound.name = name;
    productFound.description = description;
    productFound.available = available;
    return productFound;
  }
}
