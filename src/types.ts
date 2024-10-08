type Review = {
  comment: string;
  date?: string;
  rating?: number;
  reviewerEmail?: string;
  reviewerName: string;
};

export type Reviews = Review[];

export type Car = {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: { width: number; height: number; depth: number };
  discountPercentage: number;
  id: number;
  images: string[];
  meta: { createdAt: string; updatedAt: string; barcode: string; qrCode: string };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Reviews;
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
};

export type LocalReview = {
  reviewerName: string;
  comment: string;
};

export type FilterCars = {
  inStock: boolean;
  priceFrom: string;
  priceTo: string;
  sort: string;
  models: string;
};
