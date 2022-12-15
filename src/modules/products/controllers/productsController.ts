import { Request, Response } from "express";
import { ListProductService } from "../services/listProductService";
import { ShowProductService } from "../services/showProductService";
import { CreateProductService } from '../services/createProductService';
import { UpdateProductService } from '../services/updateProductService';
import { DeleteProductService } from '../services/deleteProductService';

export class ProductController {
  public async index(req: Request, res: Response): Promise<Response>  {
    const listProducts = new ListProductService()
    const products = await listProducts.execute()

    return res.json(products)
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const showProducts = new ShowProductService()
    const product = await showProducts.execute({ id })

    return res.json(product)
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, price, quantity } = req.body
    const createProduct = new CreateProductService()
    const product = await createProduct.execute({ name, price, quantity})

    return res.json(product)
  }
  
  public async update(req: Request, res: Response): Promise<Response> {
    const { name, price, quantity } = req.body
    const { id } = req.params
    const updateProduct = new UpdateProductService()
    const product = updateProduct.execute({ id, name, price, quantity})

    return res.json(product)
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const deleteProduct = new DeleteProductService()
    await deleteProduct.execute({ id })

    return res.json([])
  }
}