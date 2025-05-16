import { CreateProductUseCase } from './create-product'
import { Product } from '../entities/product'
import { ProductRepository } from '../repositories/product-repository'

const fakeProductRepository: ProductRepository = {
  create: async (product: Product) => {
    return
  }
}

test('create an product', async () => {
  const createProduct = new CreateProductUseCase(fakeProductRepository)

  const product = await createProduct.execute({
    userId: "1",
    name: "Product",
    stock: 0,
    purchasePrice: 0,
    salePrice: 0,
    size: "size",
    color: "color"
  })

  expect(product.name).toEqual('Product')
})