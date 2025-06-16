import type { Product } from "@/types/product";

// Main product data
export const mainProduct: Product = {
  id: "1",
  name: "DRESS NAME",
  price: 99,
  images: [
    { src: "/images/card 2.1.webp", alt: "Black dress front view" },
    { src: "/images/card 2.2.webp", alt: "Black dress side view" },
    { src: "/images/card 2.3.webp", alt: "Black dress back view" },
    { src: "/images/card 2.4.webp", alt: "Black dress detail view" },
  ],
  sizes: ["XS", "S", "M"],
  defaultSize: "S",
  rentalFee: 220.0,
  insuranceFee: 8.0,
  shippingFee: 10.0,
  slug: "dress-name",
  description:
    "Elegant black dress perfect for formal occasions and evening events.",
};

// Styled by you products
export const styledByYouProducts: Product[] = [
  {
    id: "1",
    name: "WEDDING GUEST READY",
    price: 89,
    images: [
      {
        src: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Navy blue elegant dress - front",
      },
      {
        src: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Navy blue elegant dress - back",
      },
      {
        src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Navy blue elegant dress - detail",
      },
    ],
    sizes: ["XS", "S", "M", "L"],
    rentalFee: 180.0,
    insuranceFee: 8.0,
    shippingFee: 10.0,
    slug: "wedding-guest-ready",
    description:
      "Perfect navy blue dress for wedding guests and special occasions.",
  },
  {
    id: "2",
    name: "SUMMER ELEGANCE",
    price: 95,
    images: [
      {
        src: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Light pink summer dress - front",
      },
      {
        src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Light pink summer dress - back",
      },
      {
        src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Light pink summer dress - detail",
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    rentalFee: 190.0,
    insuranceFee: 9.0,
    shippingFee: 12.0,
    slug: "summer-elegance",
    description:
      "Elegant light pink dress for summer outings and garden parties.",
  },
  {
    id: "3",
    name: "MIDNIGHT GLAM",
    price: 120,
    images: [
      {
        src: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Black evening dress - front",
      },
      {
        src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Black evening dress - back",
      },
      {
        src: "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Black evening dress - detail",
      },
    ],
    sizes: ["XS", "S", "M"],
    rentalFee: 210.0,
    insuranceFee: 10.0,
    shippingFee: 15.0,
    slug: "midnight-glam",
    description: "Glamorous black evening dress perfect for formal events.",
  },
  // {
  //   id: "4",
  //   name: "SUNSET BLOOM",
  //   price: 85,
  //   images: [
  //     {
  //       src: "https://images.unsplash.com/photo-1623609163859-ca93c959b5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Floral pattern dress - front",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1618554754947-e01d5ce3c549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Floral pattern dress - back",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Floral pattern dress - detail",
  //     },
  //   ],
  //   sizes: ["M", "L", "XL"],
  //   rentalFee: 160.0,
  //   insuranceFee: 7.0,
  //   shippingFee: 10.0,
  //   slug: "sunset-bloom",
  //   description: "Vibrant floral dress for beach weddings and summer vibes.",
  // },
  {
    id: "5",
    name: "VINTAGE ROSE",
    price: 98,
    images: [
      {
        src: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Vintage style dress - front",
      },
      {
        src: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Vintage style dress - back",
      },
      {
        src: "https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        alt: "Vintage style dress - detail",
      },
    ],
    sizes: ["S", "M", "L"],
    rentalFee: 175.0,
    insuranceFee: 8.0,
    shippingFee: 12.0,
    slug: "vintage-rose",
    description: "Romantic vintage-style dress with elegant details.",
  },
  // {
  //   id: "6",
  //   name: "EMERALD EVENING",
  //   price: 110,
  //   images: [
  //     {
  //       src: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Green evening gown - front",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1613914124839-a5b05e390d91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Green evening gown - back",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Green evening gown - detail",
  //     },
  //   ],
  //   sizes: ["XS", "S", "M", "L"],
  //   rentalFee: 195.0,
  //   insuranceFee: 9.5,
  //   shippingFee: 12.0,
  //   slug: "emerald-evening",
  //   description: "Stunning emerald green gown for elegant evening events.",
  // },
  // {
  //   id: "7",
  //   name: "COASTAL BREEZE",
  //   price: 78,
  //   images: [
  //     {
  //       src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Light blue summer dress - front",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Light blue summer dress - back",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Light blue summer dress - detail",
  //     },
  //   ],
  //   sizes: ["S", "M", "L", "XL"],
  //   rentalFee: 150.0,
  //   insuranceFee: 7.0,
  //   shippingFee: 10.0,
  //   slug: "coastal-breeze",
  //   description: "Light and airy blue dress perfect for beach events.",
  // },
  // {
  //   id: "8",
  //   name: "RUBY ROMANCE",
  //   price: 105,
  //   images: [
  //     {
  //       src: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Red evening dress - front",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Red evening dress - back",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Red evening dress - detail",
  //     },
  //   ],
  //   sizes: ["XS", "S", "M"],
  //   rentalFee: 185.0,
  //   insuranceFee: 9.0,
  //   shippingFee: 12.0,
  //   slug: "ruby-romance",
  //   description: "Stunning red dress for romantic evenings and special dates.",
  // },
  // {
  //   id: "9",
  //   name: "GOLDEN GALA",
  //   price: 130,
  //   images: [
  //     {
  //       src: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Gold sequin gown - front",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Gold sequin gown - back",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Gold sequin gown - detail",
  //     },
  //   ],
  //   sizes: ["S", "M", "L"],
  //   rentalFee: 220.0,
  //   insuranceFee: 12.0,
  //   shippingFee: 15.0,
  //   slug: "golden-gala",
  //   description: "Luxurious gold sequin gown for galas and formal events.",
  // },
  // {
  //   id: "10",
  //   name: "LAVENDER DREAM",
  //   price: 92,
  //   images: [
  //     {
  //       src: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Lavender cocktail dress - front",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Lavender cocktail dress - back",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Lavender cocktail dress - detail",
  //     },
  //   ],
  //   sizes: ["XS", "S", "M", "L", "XL"],
  //   rentalFee: 170.0,
  //   insuranceFee: 8.0,
  //   shippingFee: 10.0,
  //   slug: "lavender-dream",
  //   description:
  //     "Soft lavender dress perfect for spring events and garden parties.",
  // },
  // {
  //   id: "11",
  //   name: "CLASSIC NOIR",
  //   price: 115,
  //   images: [
  //     {
  //       src: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Classic black dress - front",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Classic black dress - back",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Classic black dress - detail",
  //     },
  //   ],
  //   sizes: ["S", "M", "L"],
  //   rentalFee: 200.0,
  //   insuranceFee: 10.0,
  //   shippingFee: 12.0,
  //   slug: "classic-noir",
  //   description: "Timeless black dress suitable for any formal occasion.",
  // },
  // {
  //   id: "12",
  //   name: "IVORY ELEGANCE",
  //   price: 108,
  //   images: [
  //     {
  //       src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Ivory cocktail dress - front",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Ivory cocktail dress - back",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //       alt: "Ivory cocktail dress - detail",
  //     },
  //   ],
  //   sizes: ["XS", "S", "M", "L"],
  //   rentalFee: 190.0,
  //   insuranceFee: 9.0,
  //   shippingFee: 12.0,
  //   slug: "ivory-elegance",
  //   description:
  //     "Sophisticated ivory dress for upscale events and celebrations.",
  // },
];

// All products combined for easy lookup
export const allProducts: Product[] = [mainProduct, ...styledByYouProducts];

// Function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug);
}

// Function to get trending products - return ALL products instead of just 5
export function getTrendingProducts(): Product[] {
  // Return all products instead of just the first 5
  return allProducts;
}

// Function to get more products for pagination demo
export function getMoreProducts(count = 40): Product[] {
  // Create multiple copies of the products to have enough for pagination
  const result: Product[] = [];
  const baseProducts = styledByYouProducts;

  // Generate the requested number of products by duplicating and modifying existing ones
  for (let i = 0; i < count; i++) {
    const baseProduct = baseProducts[i % baseProducts.length];
    const productId = `${baseProduct.id}-copy-${
      Math.floor(i / baseProducts.length) + 1
    }`;

    result.push({
      ...baseProduct,
      id: productId,
      slug: `${baseProduct.slug}-${productId}`,
      price: baseProduct.price + (i % 5) * 10, // Vary the price slightly
    });
  }

  return [...allProducts, ...result];
}
