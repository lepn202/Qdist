/* Headless Shopify type stubs — expand when Storefront API is wired */

export interface ShopifyProduct {
  id:          string
  handle:      string
  title:       string
  description: string
  priceRange: {
    minVariantPrice: MoneyV2
    maxVariantPrice: MoneyV2
  }
  images: {
    edges: Array<{ node: ShopifyImage }>
  }
  variants: {
    edges: Array<{ node: ShopifyVariant }>
  }
  tags:         string[]
  productType:  string
  vendor:       string
  availableForSale: boolean
}

export interface ShopifyVariant {
  id:            string
  title:         string
  price:         MoneyV2
  availableForSale: boolean
  selectedOptions: Array<{ name: string; value: string }>
  sku:           string
}

export interface ShopifyImage {
  url:       string
  altText?:  string
  width:     number
  height:    number
}

export interface MoneyV2 {
  amount:       string
  currencyCode: string
}

export interface ShopifyCart {
  id:    string
  lines: {
    edges: Array<{ node: CartLine }>
  }
  cost: {
    totalAmount:    MoneyV2
    subtotalAmount: MoneyV2
    totalTaxAmount: MoneyV2
  }
  checkoutUrl: string
}

export interface CartLine {
  id:          string
  quantity:    number
  merchandise: ShopifyVariant & { product: ShopifyProduct }
  cost: {
    totalAmount: MoneyV2
  }
}
