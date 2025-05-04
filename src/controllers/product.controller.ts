import {
  CreateProductDto,
  UpdateProductDto,
} from "../dtos/request/product.request.dto";
import { Request, Response } from "express";
import ProductService from "../services/product.service";
import { StatusCodes as HttpStatus } from "http-status-codes";

class ProductController {
  private service = ProductService;
  async findAll(req: Request, res: Response) {
    try {
      const products = await this.service.findAll();
      if (!products?.length) {
        console.error("Nenhum produto encontrado");

        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: "Nenhum produto encontrado" });
      }
      return res.status(HttpStatus.OK).json(products);
    } catch (error) {
      console.error("Erro ao buscar todos os produtos", error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Erro interno ao buscar produtos", error });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const payload = req.body as CreateProductDto;

      const product = await this.service.findBySku(payload.sku);
      if (product) {
        console.error("SKU já cadastrado para outro produto");
        return res
          .status(HttpStatus.CONFLICT)
          .json({ message: "SKU já cadastrado para outro produto" });
      }

      const newProduct = await this.service.createProduct(payload);

      return res.status(HttpStatus.CREATED).json(newProduct);
    } catch (error) {
      console.error("Erro ao criar produto", error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Erro interno ao criar produtos", error });
    }
  }

  async findBySku(req: Request, res: Response) {
    try {
      const sku = req.params.sku;
      const product = await this.service.findBySku(sku);
      if (!product) {
        console.error("Nenhum produto encontrado");

        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: "Nenhum produto encontrado" });
      }

      return res.status(HttpStatus.OK).json(product);
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Erro interno ao buscar produtos", error });
    }
  }

  async deleteBySku(req: Request, res: Response) {
    try {
      const sku = req.params.sku;
      const hasDeleted = await this.service.deleteBySku(sku);
      if (!hasDeleted) {
        console.error("Nenhum produto encontrado");

        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: "Nenhum produto encontrado" });
      }

      return res.status(HttpStatus.NO_CONTENT).send();
    } catch (error) {
      console.error("Erro ao deletar produto", error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Erro interno ao deletar produto", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const sku = req.params.sku;
      const payload = req.body as UpdateProductDto;

      const product = await this.service.update(sku, payload);
      if (!product) {
        console.error("Nenhum produto encontrado");

        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: "Nenhum produto encontrado" });
      }

      res.status(HttpStatus.ACCEPTED).json(product);
    } catch (error) {
      console.error("Erro ao atualizar produto", error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Erro interno ao atualizar produto", error });
    }
  }
}

export default new ProductController();
