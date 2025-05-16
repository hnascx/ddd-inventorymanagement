import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface ProductProps {
  authorId: UniqueEntityID
  name: string
  stock: number
  purchasePrice: number
  salePrice: number
  size: string
  color: string
  createdAt: Date
  updatedAt?: Date
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name
  }

  get stock() {
    return this.props.stock
  }

  get purchasePrice() {
    return this.props.purchasePrice
  }

  get salePrice() {
    return this.props.salePrice
  }

  get size() {
    return this.props.size
  }

  get color() {
    return this.props.color
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get isTheProductEnding() {
    return this.props.stock <= 3
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set name(name: string) {
    this.props.name = name
    this.touch()
  }

  set stock(stock: number) {
    this.props.stock = stock
    this.touch()
  }

  set purchasePrice(purchasePrice: number) {
    this.props.purchasePrice = purchasePrice
    this.touch()
  }

  set salePrice(salePrice: number) {
    this.props.salePrice = salePrice
    this.touch()
  }

  set size(size: string) {
    this.props.size = size
    this.touch()
  }

  set color(color: string) {
    this.props.color = color
    this.touch()
  }

  static create(
    props: Optional<ProductProps, 'createdAt'>,
    id?: UniqueEntityID
  ) {
    const product = new Product(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )
  
    return product
  } 
} 