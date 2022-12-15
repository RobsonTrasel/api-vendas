import { getCustomRepository } from "typeorm"
import { ProductRepository } from "../typeorm/repositories/productsReposity"
import { Product } from "../typeorm/entities/product";
import AppError from '../../../shared/errors/appError';


interface IRequest {
  name: string
  price: number
  quantity: number
}

export class CreateProductService {
  public async execute({name, price, quantity}: IRequest): Promise<Product | undefined> {
    const productRepository = getCustomRepository(ProductRepository)
    const productExists = await productRepository.findByName(name)

    if(productExists) {
      throw new AppError('There is already one product with this name')
    }

    const product = productRepository.create({
      name, price, quantity
    })

    await productRepository.save(product)

    return product
  }
}