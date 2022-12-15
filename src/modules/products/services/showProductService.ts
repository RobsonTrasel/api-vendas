import { getCustomRepository } from "typeorm"
import { ProductRepository } from "../typeorm/repositories/productsReposity"
import { Product } from "../typeorm/entities/product";
import AppError from '../../../shared/errors/appError';

interface IRequest {
  id: string
}


export class ShowProductService {
  public async execute({id}: IRequest): Promise<Product | undefined> {
    const productRepository = getCustomRepository(ProductRepository)

    const product = productRepository.findOne({where: { id }})

    if(!product) throw new AppError('Product not found')

    return product
  }
}