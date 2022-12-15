import { getCustomRepository } from "typeorm"
import { ProductRepository } from "../typeorm/repositories/productsReposity"
import { Product } from "../typeorm/entities/product";


export class ListProductService {
  public async execute(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository)

    const products = productRepository.find()

    return products
  }
}