import { Repository, DataSource, createQueryBuilder } from 'typeorm';
import { Product } from '../entities/product';
import { AppDataSource } from '../../../shared/typeorm/data-source';


export const ProductRepository = AppDataSource.getRepository(Product).extend({
  findByName(name: string){
    return this.createQueryBuilder('products')
  }
})

