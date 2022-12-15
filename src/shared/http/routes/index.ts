import { Router } from 'express'
import { productsRouter } from '../../../modules/products/routes/products.routes';

export const routes = Router();

routes.use('/products', productsRouter)

