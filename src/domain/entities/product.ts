import { randomUUID } from "node:crypto"

export class Product {
  public id: string
  public name: string
  public stock: number
  public purchasePrice: number
  public salePrice: number
  public size: string
  public color: string

  constructor(name: string, stock: number, purchasePrice: number, salePrice: number, size: string, color: string, id?: string) {
    this.id = id ?? randomUUID()
    this.name = name
    this.stock = stock
    this.purchasePrice = purchasePrice
    this.salePrice = salePrice
    this.size = size
    this.color = color
  }
} 