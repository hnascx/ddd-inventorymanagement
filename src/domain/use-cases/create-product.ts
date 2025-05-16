import { Product } from "../entities/product"

interface CreateProductUseCaseRequest {
  userId: string
  productId: string
  name: string
  stock: number
  purchasePrice: number
  salePrice: number
  size: string
  color: string
}

export class CreateProductUseCase {
  execute({ userId, productId }: CreateProductUseCaseRequest) {
    const product = new Product("Product", 0, 0, 0, "size", "color")

    return product
  }
}