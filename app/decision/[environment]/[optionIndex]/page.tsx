"use client"

import { useState } from "react"
import { notFound, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getScenarioData } from "@/lib/scenarios"
import { updateGameProgress, type GameState } from "@/lib/game-state"
import { CongratulationsModal } from "@/components/congratulations-modal"
import { PointsDisplay } from "@/components/points-display"

export default function Decision({ params }: { params: { environment: string; optionIndex: string } }) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [gameState, setGameState] = useState<GameState | null>(null)
  const scenario = getScenarioData(params.environment)

  if (!scenario) {
    notFound()
  }

  const optionIndex = Number.parseInt(params.optionIndex)
  const decision = scenario.options[optionIndex]

  if (!decision) {
    notFound()
  }

  const handleContinue = () => {
    const points = decision.isCorrect ? 20 : 10
    const newGameState = updateGameProgress(params.environment, points)
    setGameState(newGameState)
    setShowModal(true)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8 text-center">
      <PointsDisplay />
      <h1 className="mb-6 text-[#0d3c26]">Decision Outcome</h1>
      <div className="bg-white p-6 rounded-lg mb-6 max-w-2xl w-full shadow-md">
        <h2 className="mb-2 text-[#0d3c26]">Your Choice: {decision.text}</h2>
        <p className="mb-4 text-[#0d3c26]">{decision.description}</p>
        <p className="font-bold text-[#0d3c26]">Points earned: {decision.isCorrect ? 20 : 10}</p>
      </div>
      <div className="bg-white p-6 rounded-lg mb-6 max-w-2xl w-full shadow-md">
        <h2 className="mb-2 text-[#0d3c26]">Outcome</h2>
        <p className="text-[#0d3c26]">{decision.review}</p>
      </div>
      <div className="bg-white p-6 rounded-lg mb-6 max-w-2xl w-full shadow-md">
        <h2 className="mb-2 text-[#0d3c26]">Feedback</h2>
        <p className="text-[#0d3c26]">{decision.feedback}</p>
      </div>
      <Button
        size="lg"
        className="bg-[#0d3c26] text-white hover:bg-[#daf2ce] hover:text-[#0d3c26]"
        onClick={handleContinue}
      >
        Continue
      </Button>
      {gameState && (
        <CongratulationsModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false)
            router.push("/environments")
          }}
          isWinner={gameState.isWinner}
        />
      )}
    </div>
  )
}

