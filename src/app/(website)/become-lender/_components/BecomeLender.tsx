import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BecomeLender = () => {
  return (
    <div>
         <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 text-center md:py-20">
          <div className="container px-4 md:px-6">
            <h1 className="mb-6 text-3xl font-normal uppercase tracking-widest md:text-4xl">Partner with Muse Gala</h1>
            <Link
              href="#"
              className="inline-block border-b border-black px-6 py-2 text-xs uppercase tracking-widest hover:bg-black hover:text-white"
            >
              Start Listing Today
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <Image src="/images/pwmg1.png" alt="Trusted Platform" width={64} height={64} />
                </div>
                <h3 className="mb-2 text-2xl lg:text-3xl uppercase tracking-widest">Trusted Platform</h3>
                <p className="text-xl text-gray-600">
                  List your dresses on a platform <br /> trusted by thousands of renters.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <Image src="/images/pwmg2.png" alt="Wider Audience" width={64} height={64} />
                </div>
                <h3 className="mb-2 text-2xl lg:text-3xl uppercase tracking-widest">Wider Audience</h3>
                <p className="text-xl text-gray-600">Expand your reach and <br /> get more bookings.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <Image src="/images/pwmg3.png" alt="Seamless Management" width={64} height={64} />
                </div>
                <h3 className="mb-2 text-2xl lg:text-3xl uppercase tracking-widest">Seamless Management</h3>
                <p className="text-xl text-gray-600">Manage rentals <br /> with our intuitive tools and support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Expect */}
        <section className="py-12 text-center md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="mb-10  text-3xl font-normal uppercase tracking-widest  sub-title">What You Can Expect</h2>
            <div className="mx-auto max-w-5xl space-y-3 md:text-[28px]">
              <p className=''>• 80% of listings receive a booking within the first 30 days.</p>
              <p>• Lenders grow their rental bookings by up to 40% within the first 6 months.</p>
              <p>• 85% of customers prefer booking from curated boutique collections.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="mb-10 text-center  font-normal uppercase tracking-widest  sub-title">
              How It Works
            </h2>
            <div className="mx-auto max-w-2xl space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 md:h-10 w-8 md:w-10 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <span>1</span>
                </div>
                <div>
                  <h3 className="mb-1 text-[24px] font-medium">Sign Up</h3>
                  <p className="text-[18px] text-gray-600">Create your lender account with your business details.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 md:h-10 w-8 md:w-10 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <span>2</span>
                </div>
                <div>
                  <h3 className="mb-1 text-[24px] font-medium">List Your Dresses</h3>
                  <p className="text-[18px] text-gray-600">
                    Upload your inventory with photos, descriptions, and availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-8 md:h-10 w-8 md:w-10 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <span>3</span>
                </div>
                <div>
                  <h3 className="mb-1 text-[24px] font-medium">Manage Rentals</h3>
                  <p className="text-[18px] text-gray-600">
                    Track bookings, communicate with renters, and receive payment seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support You Can Count On */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="mb-10 text-center text-2xl font-normal uppercase tracking-widest md:text-3xl">
              Support You Can Count On
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <Image src="/customer-support-icon.png" alt="Dedicated Support" width={64} height={64} />
                </div>
                <h3 className="mb-2 text-xs uppercase tracking-widest">Dedicated Support</h3>
                <p className="text-xs text-gray-600">
                  Our team is here to help you every step from onboarding to daily operations.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <Image src="/placeholder.svg?key=pfitp" alt="Insurance Coverage" width={64} height={64} />
                </div>
                <h3 className="mb-2 text-xs uppercase tracking-widest">Insurance Coverage</h3>
                <p className="text-xs text-gray-600">
                  Optional insurance coverage to protect your dresses against minor accidents.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <Image src="/dispute-resolution-icon.png" alt="Dispute Handling" width={64} height={64} />
                </div>
                <h3 className="mb-2 text-xs uppercase tracking-widest">Dispute Handling</h3>
                <p className="text-xs text-gray-600">
                  We manage disputes and ensure you don't lose out on getting paid what's owed.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <Image src="/secure-payment-icon.png" alt="Secure Payments" width={64} height={64} />
                </div>
                <h3 className="mb-2 text-xs uppercase tracking-widest">Secure Payments</h3>
                <p className="text-xs text-gray-600">
                  Reliable payment processing so you get paid fast and securely after each rental.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="mb-2 text-center text-2xl font-normal uppercase tracking-widest md:text-3xl">
              Choose The Plan
            </h2>
            <h3 className="mb-10 text-center text-xl font-normal uppercase tracking-widest">That Grows With You</h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Founder's Collective */}
              <div className="flex flex-col border p-6">
                <div className="mb-6 text-center">
                  <h4 className="mb-1 text-lg font-normal uppercase tracking-widest">Founder's Collective</h4>
                  <p className="text-xs text-gray-600">Exclusive Onboarding Tier</p>
                </div>

                <div className="mb-6 text-center">
                  <p className="text-lg font-medium uppercase">Free</p>
                  <p className="text-xs text-gray-600">Limited Availability</p>
                </div>

                <div className="mb-6 text-center">
                  <p className="text-sm">0% Commission</p>
                </div>

                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Core Platform Access
                  </li>
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Standard Listing (5 Items)
                  </li>
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    No Commission Fees
                  </li>
                </ul>

                <div className="mt-auto text-center">
                  <button className="w-full border border-black px-4 py-2 text-xs uppercase tracking-widest hover:bg-black hover:text-white">
                    Choose Plan
                  </button>
                </div>
              </div>

              {/* Signature */}
              <div className="flex flex-col border p-6">
                <div className="mb-6 text-center">
                  <h4 className="mb-1 text-lg font-normal uppercase tracking-widest">Signature</h4>
                  <p className="text-xs text-gray-600">Growth Plan</p>
                </div>

                <div className="mb-6 text-center">
                  <p className="text-lg font-medium uppercase">$79</p>
                  <p className="text-xs text-gray-600">Per Month</p>
                </div>

                <div className="mb-6 text-center">
                  <p className="text-sm">10% Commission</p>
                </div>

                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Premium Platform Access
                  </li>
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Extended Listings (20)
                  </li>
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Priority Exposure
                  </li>
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Dedicated VIP Support
                  </li>
                </ul>

                <div className="mt-auto text-center">
                  <button className="w-full border border-black px-4 py-2 text-xs uppercase tracking-widest hover:bg-black hover:text-white">
                    Choose Plan
                  </button>
                </div>
              </div>

              {/* Vault Society */}
              <div className="flex flex-col border p-6">
                <div className="mb-6 text-center">
                  <h4 className="mb-1 text-lg font-normal uppercase tracking-widest">Vault Society</h4>
                  <p className="text-xs text-gray-600">Premium Plan</p>
                </div>

                <div className="mb-6 text-center">
                  <p className="text-lg font-medium uppercase">$129</p>
                  <p className="text-xs text-gray-600">Per Month</p>
                </div>

                <div className="mb-6 text-center">
                  <p className="text-sm">5% Commission</p>
                </div>

                <ul className="mb-6 space-y-2">
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Premium Platform Access
                  </li>
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Unlimited Listings
                  </li>
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Lower Commission Rate
                  </li>
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Gold Medal Shipping
                  </li>
                  <li className="flex items-center text-xs">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-black"></span>
                    Enhanced VIP Access
                  </li>
                </ul>

                <div className="mt-auto text-center">
                  <button className="w-full border border-black px-4 py-2 text-xs uppercase tracking-widest hover:bg-black hover:text-white">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="overflow-x-auto py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="mb-10 text-center text-2xl font-normal uppercase tracking-widest md:text-3xl">
              Plan Comparison
            </h2>

            <div className="min-w-[768px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 text-left text-xs font-normal"></th>
                    <th className="py-4 text-center text-xs font-normal uppercase">Founder's Collective</th>
                    <th className="py-4 text-center text-xs font-normal uppercase">Signature</th>
                    <th className="py-4 text-center text-xs font-normal uppercase">Vault Society</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 text-left text-xs">Perfect For</td>
                    <td className="py-4 text-center text-xs">Early boutique getting started</td>
                    <td className="py-4 text-center text-xs">Growing to mid-sized boutique</td>
                    <td className="py-4 text-center text-xs">Premium, high-volume boutiques</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 text-left text-xs">Monthly Fee</td>
                    <td className="py-4 text-center text-xs">Free (first 3 months)</td>
                    <td className="py-4 text-center text-xs">$49/month</td>
                    <td className="py-4 text-center text-xs">$129/month</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 text-left text-xs">Commission</td>
                    <td className="py-4 text-center text-xs">0%</td>
                    <td className="py-4 text-center text-xs">10%</td>
                    <td className="py-4 text-center text-xs">5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 text-left text-xs">Return Shipping</td>
                    <td className="py-4 text-center text-xs">✕</td>
                    <td className="py-4 text-center text-xs">✕</td>
                    <td className="py-4 text-center text-xs">Covered by Muse Gala</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 text-left text-xs">Events</td>
                    <td className="py-4 text-center text-xs">✕</td>
                    <td className="py-4 text-center text-xs">Invite Based</td>
                    <td className="py-4 text-center text-xs">Guaranteed Invite</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* List With Muse Gala */}
        <section className="py-12 text-center md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="mb-4 text-2xl font-normal uppercase tracking-widest md:text-3xl">List With Muse Gala</h2>
            <p className="mb-8 text-xs text-gray-600">
              No listing fees. No hidden costs. Just more exposure, more rentals, and a seamless dashboard.
            </p>
            <Link
              href="#"
              className="inline-block border border-black px-6 py-2 text-xs uppercase tracking-widest hover:bg-black hover:text-white"
            >
              Become A Lender
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default BecomeLender
