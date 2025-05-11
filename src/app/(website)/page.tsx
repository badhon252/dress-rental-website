import { ProductGrid } from "@/components/product/product-grid";
import SectionHeader from "@/components/section/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getTrendingProducts } from "@/data/product-data";
import HowItWork from "@/components/HowItWork";
import ServiceFeatures from "@/components/ServiceFeatures";
import Image from "next/image";

export default function Home() {
  const trendingProducts = getTrendingProducts();
  return (
    <>
      <div
        className=" h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/hero.webp)` }}
      >
        <div className="flex justify-center items-center h-full flex-col gap-y-5">
          <h1 className="text-white text-[35px] md:text-[45px] lg:text-[56px] leading-[64px] tracking-[10px] md:tracking-[20px] text-center font-avenir">
            EFFORTLESS FASHION HIRE
          </h1>

          <Button
            variant="link"
            className="underline text-white leading-[20px] tracking-[20%] text-[20px] font-nimbus uppercase"
          >
            <Link href="/login">Browse to Edit</Link>
          </Button>
        </div>
      </div>
      <div className="h-[300vh] bg-white">

        <ProductGrid
          title="TRENDING NOW"
          subtitle="EXPLORE THE EDIT"
          products={trendingProducts}
        />



{/* FIND YOUR DRESS NEAR YOUr map */}
<div className="flex flex-col md:flex-row w-full ">
      {/* Text content section */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center ">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className=" font-bold tracking-wider mb-6 sub-title">FIND YOUR DRESS NEAR YOU</h1>
          <p className="text-xl mb-8 text-gray-700">Discover rentals ready for pick up. Real time availability.</p>
          {/* <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white transition-colors uppercase tracking-wider font-medium py-6 px-8"
          >
            Explore nearby dresses
          </Button> */}
            <Link
              href="#"
              className="inline-block border-b border-black px-6 py-2 text-xl uppercase tracking-widest hover:bg-black hover:text-white"
            >
              Start Listing Today
            </Link>
        </div>
      </div>

      {/* Map section */}
      <div className="w-full md:w-1/2  md:h-auto relative">
        {/* Map image */}
        <Image
          src="/images/Map.png"
          alt="map" 
          width={500}
          height={500}
          className="w-full h-[400px] object-cover"
        />

     
      </div>

  
    </div>

                <HowItWork />
                <ProductGrid
          title="THE MUSE EDIT"
          subtitle="EXPLORE THE EDIT"
          products={trendingProducts}
        />
                <ServiceFeatures/>
      </div>
    </>
  );
}
