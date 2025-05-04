export interface CreateProductDto {
  sku: string;
  name: string;
  value: number;
  type: string;
}

export interface UpdateProductDto {
  name?: string;
  value?: number;
  type?: string;
}
