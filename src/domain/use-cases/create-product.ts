import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Product } from "../entities/product"
import { ProductRepository } from "../repositories/product-repository"

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
  constructor(private productRepository: ProductRepository) {}

  async execute({ userId }: CreateProductUseCaseRequest) {
    const product = Product.create({
      name: "Product",
      stock: 0,
      purchasePrice: 0,
      salePrice: 0,
      size: "size",
      color: "color",
      authorId: new UniqueEntityID(userId)
    })

    await this.productRepository.create(product)

    return product
  }
}