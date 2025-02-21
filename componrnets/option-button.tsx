"use client"

import Link from "next/link"
import { useState } from "react"

interface OptionButtonProps {
  href: string
  text: string
}

export function OptionButton({ href, text }: OptionButtonProps) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <Link href={href}>
      <button
        className={`w-full py-4 px-6 text-lg rounded-md transition-colors duration-200 ${
          isSelected ? "bg-[#daf2ce] text-black" : "bg-[#0d3c26] text-white hover:bg-[#daf2ce] hover:text-black"
        }`}
        onClick={() => setIsSelected(true)}
      >
        {text}
      </button>
    </Link>
  )
}

