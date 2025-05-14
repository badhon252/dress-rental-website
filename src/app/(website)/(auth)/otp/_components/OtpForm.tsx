"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { toast } from "sonner"
import Image from "next/image"
import Link from "next/link"

const OtpForm = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const [isError, setIsError] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6)
  }, [])

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    // Take only the last character if multiple are pasted
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    setIsError(false)

    // Auto-focus next input if current input is filled
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted content is a number and has a reasonable length
    if (!/^\d+$/.test(pastedData)) return

    const newOtp = [...otp]
    const pastedChars = pastedData.split("").slice(0, 6)

    pastedChars.forEach((char, idx) => {
      if (idx < 6) newOtp[idx] = char
    })

    setOtp(newOtp)
    setIsError(false)

    // Focus the next empty input or the last input if all are filled
    const nextEmptyIndex = newOtp.findIndex((val) => !val)
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus()
    } else {
      inputRefs.current[5]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpValue = otp.join("")

    // Check if OTP is complete
    if (otpValue.length !== 6) {
      toast.error("Please enter all 6 digits")
      return
    }

    try {
      // Here you would call your API to verify the OTP
      // For demo purposes, we'll simulate an incorrect OTP
      if (otpValue === "123456") {
        toast.success("OTP verified successfully")
        // Redirect to reset password page
        window.location.href = "/reset-password"
      } else {
        setIsError(true)
        toast.error("Invalid verification code. Please try again.")
      }
    } catch (error) {
      console.error("OTP verification error:", error)
      setIsError(true)
      toast.error("Failed to verify code. Please try again.")
    }
  }

  const resendCode = () => {
    // Reset the form
    setOtp(Array(6).fill(""))
    setIsError(false)
    inputRefs.current[0]?.focus()

    // Here you would call your API to resend the code
    toast.success("New verification code sent to your email")
  }

  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[20px] md:gap-[40px] lg:gap-[60px] px-5 md:px-0">
        {/* left side image part */}
        <div className="md:col-span-3">
          <Image
            src="/images/auth.jpg"
            alt="otp-verification"
            width={500}
            height={500}
            className="w-full h-[400px] md:h-[496px] object-cover"
          />
        </div>
        {/* form part */}
        <div className="md:col-span-2 md:pr-[50px] lg:pr-[100px]">
          <h2 className="text-2xl md:text-[27px] lg:text-3xl font-normal text-black leading-[36px] pb-[25px] md:pb-[35px] lg:pb-[45px] text-right">
            Verify Your Otp
          </h2>
          <p className="text-base font-normal text-black mb-6 text-right">
            Enter the verification code sent to your email address.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between gap-2 mb-8">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="w-full max-w-[60px]">
                  <input
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={`w-full aspect-square text-center text-xl font-medium border ${
                      isError ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:border-black focus:ring-0`}
                    aria-label={`Digit ${index + 1} of verification code`}
                  />
                </div>
              ))}
            </div>

            {isError && (
              <p className="text-red-500 text-sm mb-4 text-center">Incorrect verification code. Please try again.</p>
            )}

            <div className="w-full flex justify-center items-center pt-[20px]">
              <button
                className="text-base font-normal text-black leading-[20px] border-b border-black py-[10px] uppercase"
                type="submit"
              >
                Verify Code
              </button>
            </div>
          </form>

          <div className="w-full flex justify-between items-center pt-[25px] md:pt-[45px] lg:pt-[60px]">
            <button
              className="text-base font-normal text-black leading-[20px] border-b border-black py-[10px] uppercase"
              type="button"
              onClick={resendCode}
            >
              Resend Code
            </button>
            <Link href="/forgot-password">
              <button
                className="text-base font-normal text-black leading-[20px] border-b border-black py-[10px] uppercase"
                type="button"
              >
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtpForm
