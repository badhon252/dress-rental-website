import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";
import Link from "next/link";
import { ProductCard } from "./product-card";

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function ProductGrid({ title, subtitle, products }: ProductGridProps) {
  return (
    <section className=" container mx-auto">
      <div className="text-center mb-5">
        <h2 className={cn("headerClass")}>{title}</h2>
        {subtitle && (
          <div className="flex justify-center">
            <Link href="#" className="sub-title border-b border-black pb-1">
              {subtitle}
            </Link>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.slice(0, 4).map((product) => (
          <div key={product.id} className="flex">
            <div className="w-full flex flex-col h-full">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
