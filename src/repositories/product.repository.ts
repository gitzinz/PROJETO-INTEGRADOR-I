import { AppDataSource } from "../database/data-source";
import { Product } from "../models/Product";

class ProductRepository {
  private repository = AppDataSource.getRepository(Product);

  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.repository.create(productData);
    return await this.repository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.repository.find();
  }

  async findBySku(sku: string): Promise<Product | null> {
    return await this.repository.findOneBy({ sku });
  }

  async deleteBySku(product: Product): Promise<void> {
    await this.repository.remove(product);
  }

  async update(product: Product): Promise<Product> {
    return await this.repository.save(product);
  }
}

export default new ProductRepository();
