import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#0d3c26] px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Problem Solver: Decision Master</h1>
      <p className="text-xl mb-8">Sharpen your decision-making skills and conquer real-life challenges!</p>
      <Link href="/how-to-play">
        <Button size="lg" className="text-lg bg-[#0d3c26] text-white hover:bg-[#daf2ce] hover:text-[#0d3c26]">
          Get Started
        </Button>
      </Link>
    </div>
  )
}

