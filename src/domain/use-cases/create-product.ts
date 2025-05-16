import { Product } from "../entities/product"

interface CreateProductUseCaseRequest {
  userId: string
  name: string
  stock: number
  purchasePrice: number
  salePrice: number
  size: string
  color: string
}

export class CreateProductUseCase {
  execute({ userId }: CreateProductUseCaseRequest) {
    const product = new Product({
      name: "Product",
      stock: 0,
      purchasePrice: 0,
      salePrice: 0,
      size: "size",
      color: "color",
      authorId: userId
    })

    return product
  }
}