import { Entity } from "../../core/entities/entity"
import { Slug } from "./value-objects/slug"

interface ProductProps {
  name: string
  stock: number
  purchasePrice: number
  salePrice: number
  size: string
  color: string
  slug: Slug
  authorId: string
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name
  }
} 