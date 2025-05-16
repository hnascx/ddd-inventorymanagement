import { expect, test } from 'vitest'
import { CreateProductUseCase } from './create-product'

test('create an product', () => {
  const createProduct = new CreateProductUseCase()

  const product = createProduct.execute({
    userId: "1",
    productId: "1",
    name: "Product",
    stock: 0,
    purchasePrice: 0,
    salePrice: 0,
    size: "size",
    color: "color"
  })

  expect(product.name).toEqual('Product')
})