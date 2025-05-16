import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Slug } from "./value-objects/slug"

interface ProductProps {
  authorId: UniqueEntityID
  name: string
  stock: number
  purchasePrice: number
  salePrice: number
  size: string
  color: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name
  }
} 