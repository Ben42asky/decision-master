import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { getGameProgress } from "@/lib/game-state"
import { PointsDisplay } from "@/components/points-display"

const environments = [
  { name: "School", image: "/static/school.png" },
  { name: "Office", image: "/static/office.png" },
  { name: "Home", image: "/static/home.png" },
  { name: "Market", image: "/static/market.png" },
  { name: "Park", image: "/static/park.png" },
  { name: "Restaurant", image: "/static/restaurant.png" },
]

export default function Environments() {
  const { totalPoints, isWinner } = getGameProgress()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
      <PointsDisplay />
      <h1 className="mb-6 text-[#0d3c26]">Choose your environment</h1>
      <p className="mb-6 text-[#0d3c26] text-center">Select an environment to start your decision-making journey!</p>
      {isWinner && (
        <div className="mb-8 p-4 bg-yellow-100 border-2 border-yellow-400 rounded-lg text-center">
          <h2 className="text-yellow-700">Congratulations! You're a Decision Master!</h2>
          <p className="text-yellow-700">You've reached 100 points and mastered all scenarios!</p>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 w-full max-w-4xl px-2 md:px-4">
        {environments.map((env) => (
          <Card key={env.name} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <Link href={`/scenario/${env.name.toLowerCase()}`}>
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] relative">
                  <Image src={env.image || "/placeholder.svg"} alt={env.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <p className="text-white text-base md:text-lg font-semibold px-2 text-center">{env.name}</p>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

