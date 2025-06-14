"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Image from "next/image"
import type { DeliveryOption } from "@/types/product"

interface DeliveryOptionsProps {
  onOptionChange: (option: DeliveryOption) => void
}

export function DeliveryOptions({ onOptionChange }: DeliveryOptionsProps) {
  const [activeOption, setActiveOption] = useState<DeliveryOption>("shipping")
  const [postcode, setPostcode] = useState("")

  const handleOptionChange = (option: DeliveryOption) => {
    setActiveOption(option)
    onOptionChange(option)
  }

  return (
    <div className="space-y-4">
      <h3 className="uppercase tracking-[0.2rem] leading-[20px] text-[14px]">DELIVERY OPTION</h3>

      <div className="h-[1px] bg-black w-full"></div>

      <div className="flex border-b border-black">
        <button
          className={`w-1/2 py-4 text-center tracking-[0.2em] uppercase leading-[20px] text-base ${
            activeOption === "shipping" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleOptionChange("shipping")}
        >
          Shipping
        </button>
        <button
          className={`w-1/2 py-4 text-center tracking-[0.2em] leading-[20px] text-base uppercase${
            activeOption === "local-pickup" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => handleOptionChange("local-pickup")}
        >
          Local Pickup
        </button>
      </div>

      {activeOption === "shipping" && (
        <div className="py-4 text-[18px] leading-[24px]">
          <p className="">$10 shipping fee (includes prepaid return label)</p>
          <p className="">Estimated delivery: 1-2 business days</p>
        </div>
      )}

      {activeOption === "local-pickup" && (
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="POST CODE"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="w-full border-b border-black py-2 pr-10 focus:outline-none uppercase"
            />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <div className="h-48 bg-gray-100 rounded-none relative">
            <Image src="/images/map-with-locations.png" alt="Location map" fill className="object-cover" />
          </div>
        </div>
      )}
    </div>
  )
}
