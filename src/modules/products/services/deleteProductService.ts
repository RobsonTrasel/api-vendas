import { getCustomRepository } from "typeorm"
import { ProductRepository } from "../typeorm/repositories/productsReposity"
import AppError from '../../../shared/errors/appError';

interface IRequest {
  id: string
}

export class DeleteProductService {
  public async execute({id}: IRequest): Promise<void> {
    const productRepository = getCustomRepository(ProductRepository)

    const product = await productRepository.findOne({where: { id }})

    if(!product) throw new AppError('Product not found')

    await productRepository.remove(product)

  }
}