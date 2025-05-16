import { randomUUID } from "node:crypto"
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

export class Product {
  public id: string
  public name: string
  public stock: number
  public purchasePrice: number
  public salePrice: number
  public size: string
  public color: string
  public slug: Slug
  public authorId: string

  constructor(props: ProductProps, id?: string) {
    this.name = props.name
    this.stock = props.stock
    this.purchasePrice = props.purchasePrice
    this.salePrice = props.salePrice
    this.size = props.size
    this.color = props.color
    this.slug = props.slug
    this.authorId = props.authorId
    this.id = id ?? randomUUID()
  }
} 