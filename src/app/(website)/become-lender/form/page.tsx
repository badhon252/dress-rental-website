"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function FormPage() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    businessName: "",
    businessABN: "",
    instagramHandle: "",
    website: "",
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    businessAddress: "",
    dressesCount: "",
    reviewMethod: "",
    localPickup: "no",
    shipAustralia: "yes",
    offerTryOns: "yes",
    agreeStandards: false,
    agreeTerms: false,
  })

  useEffect(() => {
    // Get the selected plan from localStorage
    const plan = localStorage.getItem("selectedPlan")
    if (plan) {
      setSelectedPlan(plan)
    } else {
      // If no plan is selected, redirect back to the pricing page
      router.push("/become-lender")
    }
  }, [router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Log the form data along with the selected plan
    console.log({
      selectedPlan,
      ...formData,
    })

    // You could redirect to a success page or show a success message here
    alert("Form submitted successfully! Check console for details.")
  }

  const CollapsibleSection = ({ title, id, children }: { title: string; id: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
      <div className="border-b border-gray-200">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-4 flex justify-between items-center"
          aria-expanded={isOpen}
          aria-controls={id}
        >
          <h2 className="text-lg font-medium">{title}</h2>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
          />
        </button>
        <div
          id={id}
          className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] opacity-100 mb-6" : "max-h-0 opacity-0"}`}
        >
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <form onSubmit={handleSubmit} className="space-y-12">
        <CollapsibleSection title="BUSINESS INFORMATION" id="business-info">
          <div className="space-y-6">
            <div>
              <Label htmlFor="businessName" className="block mb-1">
                Business Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                className="w-full border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>

            <div>
              <Label htmlFor="businessABN" className="block mb-1">
                Business ABN <span className="text-gray-400 text-sm">(if available)</span>
              </Label>
              <Input
                id="businessABN"
                name="businessABN"
                value={formData.businessABN}
                onChange={handleInputChange}
                className="w-full border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>

            <div>
              <Label htmlFor="instagramHandle" className="block mb-1">
                Instagram Handle <span className="text-red-500">*</span>
              </Label>
              <Input
                id="instagramHandle"
                name="instagramHandle"
                value={formData.instagramHandle}
                onChange={handleInputChange}
                required
                className="w-full border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>

            <div>
              <Label htmlFor="website" className="block mb-1">
                Website <span className="text-gray-400 text-sm">(if available)</span>
              </Label>
              <Input
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="CONTACT INFORMATION" id="contact-info">
          <div className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="block mb-1">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>

            <div>
              <Label htmlFor="emailAddress" className="block mb-1">
                Email Address <span className="text-gray-400 text-sm">(if available)</span>
              </Label>
              <Input
                id="emailAddress"
                name="emailAddress"
                type="email"
                value={formData.emailAddress}
                onChange={handleInputChange}
                className="w-full border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>

            <div>
              <Label htmlFor="phoneNumber" className="block mb-1">
                Phone Number <span className="text-gray-400 text-sm">(if available)</span>{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>

            <div>
              <Label htmlFor="businessAddress" className="block mb-1">
                Business Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="businessAddress"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleInputChange}
                required
                className="w-full border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 focus:ring-0"
              />
            </div>

            <p className="text-sm text-gray-500 italic">Important if you&apos;re offering local pickup options later.</p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="COLLECTION OVERVIEW" id="collection-overview">
          <div className="space-y-6">
            <div>
              <Label htmlFor="dressesCount" className="block mb-1">
                How many dresses do you want to list? <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <select
                  id="dressesCount"
                  name="dressesCount"
                  value={formData.dressesCount}
                  onChange={(e) => setFormData((prev) => ({ ...prev, dressesCount: e.target.value }))}
                  required
                  className="w-full border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 py-2 pr-8 appearance-none bg-transparent focus:outline-none"
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="1-5">1-5 dresses</option>
                  <option value="6-10">6-10 dresses</option>
                  <option value="11-20">11-20 dresses</option>
                  <option value="21+">21+ dresses</option>
                </select>
                <ChevronDown className="absolute right-0 top-2 h-5 w-5 pointer-events-none" />
              </div>
            </div>

            <div>
              <Label htmlFor="reviewMethod" className="block mb-1">
                Best way for us to review your stock <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <select
                  id="reviewMethod"
                  name="reviewMethod"
                  value={formData.reviewMethod}
                  onChange={(e) => setFormData((prev) => ({ ...prev, reviewMethod: e.target.value }))}
                  required
                  className="w-full border-t-0 border-x-0 border-b border-gray-300 rounded-none px-0 py-2 pr-8 appearance-none bg-transparent focus:outline-none"
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="photos">Photos</option>
                  <option value="video-call">Video Call</option>
                  <option value="in-person">In Person</option>
                </select>
                <ChevronDown className="absolute right-0 top-2 h-5 w-5 pointer-events-none" />
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="SERVICE QUESTIONS" id="service-questions">
          <div className="space-y-6">
            <div>
              <Label className="block mb-3">
                Do you offer local pickup? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.localPickup}
                onValueChange={(value) => handleRadioChange("localPickup", value)}
                className="flex gap-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="local-yes" />
                  <Label htmlFor="local-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="local-no" />
                  <Label htmlFor="local-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="block mb-3">
                Can you ship Australia-wide? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.shipAustralia}
                onValueChange={(value) => handleRadioChange("shipAustralia", value)}
                className="flex gap-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="ship-yes" />
                  <Label htmlFor="ship-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="ship-no" />
                  <Label htmlFor="ship-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="block mb-3">
                Do you offer try ons? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.offerTryOns}
                onValueChange={(value) => handleRadioChange("offerTryOns", value)}
                className="flex gap-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="tryons-yes" />
                  <Label htmlFor="tryons-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="tryons-no" />
                  <Label htmlFor="tryons-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CollapsibleSection>

        <div>
          <h2 className="text-lg font-medium mb-6">AGREEMENT</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeStandards"
                checked={formData.agreeStandards}
                onCheckedChange={(checked) => handleCheckboxChange("agreeStandards", checked as boolean)}
                required
              />
              <Label htmlFor="agreeStandards" className="text-sm">
                I confirm that all dresses listed meet Muse Gala&apos;s curation and quality standards.
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                required
              />
              <Label htmlFor="agreeTerms" className="text-sm">
                I agree to Muse Gala&apos;s <span className="text-red-500">Lender Terms & Conditions</span>.
              </Label>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button type="submit" className="px-12 py-2 bg-white text-black border border-black hover:bg-gray-100">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  )
}
