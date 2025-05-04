import {
  CreateProductDto,
  UpdateProductDto,
} from "../dtos/request/product.request.dto";
import { ProductResponseDto } from "../dtos/response/product.response.dto";
import ProductMapper from "../mapper/product.mapper";
import ProductRepository from "../repositories/product.repository";

class ProductService {
  private mapper = ProductMapper;
  private repository = ProductRepository;
  async createProduct(
    productDto: CreateProductDto
  ): Promise<ProductResponseDto> {
    const productData = this.mapper.productDtoToCreateProduct(productDto);
    const newProduct = await this.repository.create(productData);
    return this.mapper.toProductResponseDto(newProduct);
  }

  async findAll(): Promise<ProductResponseDto[]> {
    const products = await this.repository.findAll();
    return this.mapper.toProductListResponseDto(products);
  }

  async findBySku(sku: string): Promise<ProductResponseDto | null> {
    const product = await this.repository.findBySku(sku);
    if (!product) {
      return null;
    }

    return this.mapper.toProductResponseDto(product);
  }

  async deleteBySku(sku: string): Promise<boolean> {
    const product = await this.repository.findBySku(sku);
    if (!product) {
      return false;
    }

    await this.repository.deleteBySku(product);

    return true;
  }

  async update(
    sku: string,
    productData: UpdateProductDto
  ): Promise<ProductResponseDto | null> {
    const product = await this.repository.findBySku(sku);
    if (!product) {
      return null;
    }

    if (productData.name) {
      product.name = productData.name;
    }

    if (productData.type) {
      product.type = productData.type;
    }

    if (productData.value) {
      product.value = productData.value;
    }

    const updatedProduct = await this.repository.update(product);
    return this.mapper.toProductResponseDto(updatedProduct);
  }
}

export default new ProductService();
