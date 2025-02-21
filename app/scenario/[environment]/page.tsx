import { notFound } from "next/navigation"
import Image from "next/image"
import { getScenarioData } from "@/lib/scenarios"
import { OptionButton } from "@/components/option-button"
import { PointsDisplay } from "@/components/points-display"

export default function Scenario({ params }: { params: { environment: string } }) {
  const scenario = getScenarioData(params.environment)

  if (!scenario) {
    notFound()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8 text-center">
      <PointsDisplay />
      <h1 className="mb-6 text-[#0d3c26]">{scenario.title}</h1>
      <Image
        src={scenario.image || "/placeholder.svg"}
        alt={params.environment}
        width={400}
        height={300}
        className="mb-4 rounded-lg"
      />
      <p className="text-xl mb-6 text-[#0d3c26] max-w-2xl">{scenario.description}</p>
      <div className="grid gap-4 w-full max-w-2xl">
        {scenario.options.map((option, index) => (
          <OptionButton key={index} href={`/decision/${params.environment}/${index}`} text={option.text} />
        ))}
      </div>
    </div>
  )
}

