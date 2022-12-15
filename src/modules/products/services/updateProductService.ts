import { getCustomRepository } from "typeorm"
import { ProductRepository } from "../typeorm/repositories/productsReposity"
import { Product } from "../typeorm/entities/product";
import AppError from '../../../shared/errors/appError';

interface IRequest {
  id: string
  name: string
  price: number
  quantity: number
}


export class UpdateProductService {
  public async execute({id, name, price, quantity}: IRequest): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository)

    const product = await productRepository.findOne({where: { id }})
    const productExists = await productRepository.findByName(name)


    if(!product) {
      throw new AppError('Product not found')
    }
    
    if(productExists && name !== product.name) {
      throw new AppError('There is already one product with this name')
    }

    (await product).name = name;
    (await product).price = price;
    (await product).quantity = quantity;  

    await productRepository.save(product);

    return product
  }
} 