import { CreateProductDto } from "../dtos/request/product.request.dto";
import { ProductResponseDto } from "../dtos/response/product.response.dto";
import { Product } from "../models/Product";

class ProductMapper {
  toProductListResponseDto(products: Product[]): ProductResponseDto[] {
    const response = products.map((product) => {
      const productDto: ProductResponseDto = {
        id: product.id,
        sku: product.sku,
        value: product.value,
        name: product.name,
        type: product.type,
        createdAt: product.created_at.toISOString(),
        updatedAt: product.updated_at.toISOString(),
      };

      return productDto;
    });

    return response;
  }

  toProductResponseDto(product: Product): ProductResponseDto {
    const response: ProductResponseDto = {
      id: product.id,
      sku: product.sku,
      value: product.value,
      name: product.name,
      type: product.type,
      createdAt: product.created_at.toISOString(),
      updatedAt: product.updated_at.toISOString(),
    };

    return response;
  }

  productDtoToCreateProduct(product: CreateProductDto): Product {
    const response = new Product();
    response.name = product.name;
    response.sku = product.sku;
    response.type = product.type;
    response.value = product.value;

    return response;
  }
}

export default new ProductMapper();
