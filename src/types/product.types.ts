export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: ProductFeature[];
  benefits: ProductBenefit[];
  imageUrl: string;
}
